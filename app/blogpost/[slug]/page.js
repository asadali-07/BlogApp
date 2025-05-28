import fs from "fs"
import path from "path";
import matter from "gray-matter"
import { notFound } from "next/navigation"
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import {unified} from 'unified'
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from '@rehype-pretty/transformers'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import OnThisPage from "@/components/onthispage"
import ShareButtons from "@/components/ShareButtons"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SubscribeForm from "@/components/subscribe-form";



export default async function Page({ params }) {
    const filePath = path.join(process.cwd(), "public", "content", `${params.slug}.md`);
    
    if(!fs.existsSync(filePath)){ 
        return notFound() 
    } 

    const fileContent = fs.readFileSync(filePath, "utf-8")
    const {content, data} = matter(fileContent)

    const processor = unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeDocument, {title: data.title || '👋🌍'})
        .use(rehypeFormat)
        .use(rehypeStringify) 
        .use(rehypeSlug)
        .use(rehypeAutolinkHeadings)
        .use(rehypePrettyCode, {
            theme: "github-dark",
            transformers: [
                transformerCopyButton({
                  visibility: 'always',
                  feedbackDuration: 3_000,
                }),
              ],
        })

    const htmlContent = (await processor.process(content)).toString()
    const formattedDate = new Date(data.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })

    const articleUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://yourblog.com'}/blogpost/${params.slug}`;

    return (
        <main className="min-h-screen relative overflow-hidden py-12 sm:py-16">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-300 dark:bg-purple-900 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/3 -right-24 w-80 h-80 bg-pink-300 dark:bg-pink-900 rounded-full blur-3xl"></div>
            </div>
            
            <div className="container mx-auto px-4 sm:px-6 relative z-10 py-10">
                <div className="max-w-4xl mx-auto">
                    {/* Navigation */}
                    <div className="mb-8">
                        <Button
                            asChild
                            variant="outline"
                            className="border-purple-300 dark:border-purple-700 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-all duration-200"
                        >
                            <Link href="/blog" className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                Back to Blog
                            </Link>
                        </Button>
                    </div>
                    
                    {/* Article header */}
                    <header className="mb-10">
                        {data.image && (
                            <div className="relative w-full h-[300px] sm:h-[400px] mb-8 rounded-2xl overflow-hidden shadow-xl">
                                <Image 
                                    src={data.image} 
                                    alt={data.title} 
                                    fill 
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            </div>
                        )}
                        
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
                            {data.title}
                        </h1>
                        
                        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mb-6"></div>
                        
                        <div className="flex flex-wrap items-center gap-4 mb-6">
                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Author</p>
                                    <p className="font-medium text-purple-600 dark:text-purple-400">{data.author}</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Published on</p>
                                    <p className="font-medium text-purple-600 dark:text-purple-400">{formattedDate}</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded-r-lg">
                            <p className="italic text-gray-700 dark:text-gray-300">{data.description}</p>
                        </div>
                    </header>
                    
                    {/* Content and sidebar grid layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main content */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Mobile Table of Contents (collapsible) */}
                            <div className="lg:hidden">
                                <details className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl p-4">
                                    <summary className="text-xl font-bold text-purple-600 dark:text-purple-400 cursor-pointer focus:outline-none">
                                        Table of Contents
                                    </summary>
                                    <div className="mt-4 border-l-2 border-purple-300 dark:border-purple-700">
                                        <OnThisPage htmlContent={htmlContent}/>
                                    </div>
                                </details>
                            </div>
                            
                            {/* Article content */}
                            <article className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8">
                                <div 
                                    dangerouslySetInnerHTML={{ __html: htmlContent }} 
                                    className="prose prose-lg max-w-none dark:prose-invert 
                                        prose-headings:text-purple-900 dark:prose-headings:text-purple-300
                                        prose-a:text-purple-600 dark:prose-a:text-purple-400 prose-a:no-underline hover:prose-a:underline
                                        prose-img:rounded-xl prose-img:shadow-lg
                                        prose-blockquote:border-l-purple-500 prose-blockquote:bg-purple-50 dark:prose-blockquote:bg-purple-900/20 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-lg
                                        prose-code:text-purple-600 dark:prose-code:text-purple-400
                                        prose-pre:bg-gray-900 prose-pre:shadow-xl"
                                />
                            </article>
                            
                            {/* Share and tags section */}
                            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl p-6">
                                <div className="flex flex-col sm:flex-row justify-between gap-6">
                                    <div>
                                        <h3 className="text-lg font-semibold mb-3">Share this article</h3>
                                        <ShareButtons 
                                            title={data.title} 
                                            url={articleUrl}
                                        />
                                    </div>
                                    
                                    {data.tags && data.tags.length > 0 && (
                                        <div>
                                            <h3 className="text-lg font-semibold mb-3">Tags</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {data.tags.map((tag, index) => (
                                                    <span key={index} className="bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 px-3 py-1 rounded-full text-sm">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            
                            {/* Mobile newsletter subscription */}
                            <div className="lg:hidden">
                                <SubscribeForm/>
                            </div>
                        </div>
                        
                        {/* Sidebar */}
                        <div className="hidden lg:block">
                            <div className="lg:sticky lg:top-8 space-y-8">
                                <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl p-6">
                                    <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-4">Table of Contents</h3>
                                    <OnThisPage htmlContent={htmlContent}/>
                                </div>
                                
                                <SubscribeForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}