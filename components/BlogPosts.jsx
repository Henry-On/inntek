import React from 'react'
import { Card_D } from './cards'

const blogPosts = [
  {
    id: 1,
    title: 'Scaling Secure Remote Work Networks',
    description:
      'Explore practical strategies for building secure, high-performance networks that support hybrid teams and remote collaboration.',
    image: '/images/networking-data-center.webp',
  },
  {
    id: 2,
    title: 'Data Center Trends for Modern Business',
    description:
      'Learn how DCaaS and infrastructure automation can reduce costs while improving reliability for enterprise applications.',
    image: '/images/cctv cam.jpeg',
  },
  {
    id: 4,
    title: 'Proactive Infrastructure Maintenance',
    description:
      'See why monitoring, patching, and preventative care are the best ways to avoid downtime and keep operations running smoothly.',
    image: '/images/portrait-hero.png',
  },
  {
    id: 5,
    title: 'Optimizing Access Point Coverage',
    description:
      'Tips for mapping wireless coverage, reducing interference, and delivering consistent Wi-Fi performance across the workplace.',
    image: '/images/persons-three.webp',
  },
]

function BlogPosts({
    label="Insights", 
    title="Latest blog posts",
    className
}) {
  return (
    <section className={`home-blog-posts ${className || ""}`}>
      <div className="content">
        <div className="section-header">
          <span className="section-label">{label}</span>
          <div className='title-row'>
            <h2 className="section-title">{title}</h2>
            <div className="scroll-indicators">
              <span className="scroll-indicator left"></span>
              <span className="scroll-indicator right"></span>
            </div>
          </div>
        </div>

        <div className="blog-posts-row hide-x-scrollbar">
          {blogPosts.map((post) => (
            <Card_D
              key={post.id}
              className="blog-post-card"
              title={post.title}
              description={post.description}
              image={post.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogPosts