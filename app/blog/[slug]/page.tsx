import { Metadata } from 'next/types'
import { getBlogPost, listBlogPosts } from '@/lib/mdx'

type BlogPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const blogPosts = await listBlogPosts()
  const blogStaticParams = blogPosts.map((post) => ({
    slug: post.slug,
  }))
  return blogStaticParams
}

export const dynamicParams = false

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params
  const { metadata } = await getBlogPost(slug)

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.tags,
    // other...
  }
}


export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params
  const { metadata, component: MDXContent } = await getBlogPost(slug)

  const title = metadata.title
  const date = new Date(metadata.date)
  const tags = metadata.tags

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date)

  return (
    <div className='flex flex-col items-center gap-6 py-6'>
      {/* some wrappers for styling and additional content*/}
      <div className='mx-auto w-full max-w-[768px]'>
        <article className='prose w-full p-6'>
          {/* A title section using the markdown metadata */}
          <div className='mt-6 mb-8'>
            <h1 className='mb-2 text-4xl font-bold'>{title}</h1>
            <div className='flex items-center gap-2 py-2'>
              <span className='text-sm'>{formattedDate}</span>|
              <div className='flex gap-1'>
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className='border-foreground rounded-full border px-2 py-1 text-xs'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          {/* The markdown content */}
          <MDXContent />
        </article>
      </div>
    </div>
  )
}

