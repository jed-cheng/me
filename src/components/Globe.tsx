"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { SITE } from "../../site-config";

// World GeoJSON is imported at build time
// @ts-ignore
import worldData from "../lib/world.json";

interface Props {
  enableHover?: boolean;
  isStatic?: boolean;
}

export default function Globe({ enableHover = false, isStatic = false }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  const visitedCountries: string[] = SITE.visitedCountries;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clean up any previous render
    d3.select(container).selectAll("*").remove();

    const width = container.clientWidth || 600;
    const height = 500;
    const sensitivity = 75;

    const projection = d3
      .geoOrthographic()
      .scale(250)
      .center([0, 0])
      .rotate([0, -30])
      .translate([width / 2, height / 2]);

    const initialScale = projection.scale();
    const pathGenerator = d3.geoPath().projection(projection);

    const svg = d3
      .select(container)
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    svg
      .append("circle")
      .attr("fill", "#e5e7eb")
      .attr("stroke", "#d1d5db")
      .attr("stroke-width", "0.5")
      .attr("cx", width / 2)
      .attr("cy", height / 2)
      .attr("r", initialScale);

    const map = svg.append("g");

    const paths = map
      .append("g")
      .attr("class", "countries")
      .selectAll<SVGPathElement, GeoJSON.Feature>("path")
      .data((worldData as GeoJSON.FeatureCollection).features)
      .enter()
      .append("path")
      .attr("d", (d) => pathGenerator(d) ?? "")
      .style("fill", (d) => {
        const name = (d.properties as { name: string })?.name;
        return visitedCountries.includes(name) ? "#6366f1" : "#f3f4f6";
      })
      .style("stroke", "#d1d5db")
      .style("stroke-width", 0.4)
      .style("opacity", 0.9);

    if (enableHover) {
      const tooltip = d3
        .select("body")
        .append("div")
        .style("position", "absolute")
        .style("background", "rgba(0,0,0,0.8)")
        .style("color", "white")
        .style("padding", "6px 10px")
        .style("border-radius", "6px")
        .style("font-size", "13px")
        .style("pointer-events", "none")
        .style("opacity", "0")
        .style("z-index", "9999");

      paths
        .style("cursor", "pointer")
        .on("mouseover", function (event, d) {
          const name = (d.properties as { name: string })?.name;
          const isVisited = visitedCountries.includes(name);
          d3.select(this)
            .style("fill", isVisited ? "#4f46e5" : "#c7d2fe")
            .style("opacity", "1");
          tooltip
            .html(name)
            .style("opacity", "1")
            .style("left", event.pageX + 12 + "px")
            .style("top", event.pageY - 12 + "px");
        })
        .on("mousemove", function (event) {
          tooltip
            .style("left", event.pageX + 12 + "px")
            .style("top", event.pageY - 12 + "px");
        })
        .on("mouseout", function (_event, d) {
          const name = (d.properties as { name: string })?.name;
          const isVisited = visitedCountries.includes(name);
          d3.select(this)
            .style("fill", isVisited ? "#6366f1" : "#f3f4f6")
            .style("opacity", "0.9");
          tooltip.style("opacity", "0");
        });

      // Drag to rotate
      let previousMouse: [number, number] | null = null;
      let isPaused = false;

      svg
        .on("mouseenter", () => { isPaused = true; })
        .on("mouseleave", () => { isPaused = false; })
        .call(
          (d3.drag<SVGSVGElement, unknown>() as d3.DragBehavior<SVGSVGElement, unknown, unknown>)
            .on("start", (event) => {
              isPaused = true;
              previousMouse = [event.x, event.y];
            })
            .on("drag", (event) => {
              if (!previousMouse) return;
              const rotate = projection.rotate();
              const k = sensitivity / projection.scale();
              const dx = event.x - previousMouse[0];
              const dy = event.y - previousMouse[1];
              projection.rotate([
                rotate[0] + dx * k,
                Math.max(-90, Math.min(90, rotate[1] - dy * k)),
              ]);
              previousMouse = [event.x, event.y];
              svg.selectAll<SVGPathElement, GeoJSON.Feature>("path").attr(
                "d",
                (d) => pathGenerator(d) ?? ""
              );
            })
            .on("end", () => {
              previousMouse = null;
            })
        );

      d3.timer(() => {
        if (!isPaused && !isStatic) {
          const rotate = projection.rotate();
          const k = sensitivity / projection.scale();
          projection.rotate([rotate[0] - k, rotate[1]]);
          svg.selectAll<SVGPathElement, GeoJSON.Feature>("path").attr(
            "d",
            (d) => pathGenerator(d) ?? ""
          );
        }
      }, 200);
    } else {
      // Auto-rotate without hover
      d3.timer(() => {
        if (!isStatic) {
          const rotate = projection.rotate();
          const k = sensitivity / projection.scale();
          projection.rotate([rotate[0] - k, rotate[1]]);
          svg.selectAll<SVGPathElement, GeoJSON.Feature>("path").attr(
            "d",
            (d) => pathGenerator(d) ?? ""
          );
        }
      }, 200);
    }

    return () => {
      // Remove tooltip on unmount
      d3.select("body").selectAll("[style*='z-index: 9999']").remove();
    };
  }, [enableHover, isStatic]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div ref={containerRef} className="w-full" />
      {enableHover && (
        <p className="mt-4 text-center text-sm text-muted-foreground">
          Drag to rotate · highlighted countries visited
        </p>
      )}
    </div>
  );
}
