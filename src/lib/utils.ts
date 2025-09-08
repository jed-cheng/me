import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import type { MarkdownHeading } from 'astro'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric"
  }).format(date);
}

export function readingTime(html: string) {
  const textOnly = html.replace(/<[^>]+>/g, "");
  const wordCount = textOnly.split(/\s+/).length;
  const readingTimeMinutes = ((wordCount / 200) + 1).toFixed();
  return `${readingTimeMinutes} min read`;
}

export function dateRange(startDate: Date, endDate?: Date | string): string {
  const startMonth = startDate.toLocaleString("default", { month: "short" });
  const startYear = startDate.getFullYear().toString();
  let endMonth;
  let endYear;

  if (endDate) {
    if (typeof endDate === "string") {
      endMonth = "";
      endYear = endDate;
    } else {
      endMonth = endDate.toLocaleString("default", { month: "short" });
      endYear = endDate.getFullYear().toString();
    }
  }

  return `${startMonth}${startYear} - ${endMonth}${endYear}`;
}

export interface TocItem extends MarkdownHeading {
	subheadings: Array<TocItem>
}

function diveChildren(item: TocItem, depth: number): Array<TocItem> {
	if (depth === 1 || !item.subheadings.length) {
		return item.subheadings
	} else {
		// e.g., 2
		return diveChildren(item.subheadings[item.subheadings.length - 1] as TocItem, depth - 1)
	}
}

export function generateToc(headings: ReadonlyArray<MarkdownHeading>) {
	// this ignores/filters out h1 element(s)
	const bodyHeadings = [...headings.filter(({ depth }) => depth > 1)]
	const toc: Array<TocItem> = []

	bodyHeadings.forEach((h) => {
		const heading: TocItem = { ...h, subheadings: [] }

		// add h2 elements into the top level
		if (heading.depth === 2) {
			toc.push(heading)
		} else {
			const lastItemInToc = toc[toc.length - 1]!
			if (heading.depth < lastItemInToc.depth) {
				throw new Error(`Orphan heading found: ${heading.text}.`)
			}

			// higher depth
			// push into children, or children's children
			const gap = heading.depth - lastItemInToc.depth
			const target = diveChildren(lastItemInToc, gap)
			target.push(heading)
		}
	})
	return toc
}



// import { siteConfig } from '@/site-config'

// const dateFormat = new Intl.DateTimeFormat(siteConfig.date.locale, siteConfig.date.options)

// export function getFormattedDate(
// 	date: string | number | Date,
// 	options?: Intl.DateTimeFormatOptions
// ) {
// 	if (typeof options !== 'undefined') {
// 		return new Date(date).toLocaleDateString(siteConfig.date.locale, {
// 			...(siteConfig.date.options as Intl.DateTimeFormatOptions),
// 			...options
// 		})
// 	}

// 	return dateFormat.format(new Date(date))
// }