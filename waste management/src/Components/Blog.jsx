import React from 'react'
import { Share2, Eye } from 'lucide-react'
import blog1 from '../assets/blog1.jpg';
import blog2 from '../assets/blog2.jpg';
import blog3 from '../assets/blog3.jpg';
import blog4 from '../assets/blog4.png';


const BlogSection = () => {
    const blogPosts = [
      {
        id: 1,
        title: "Integer Maecenas Eget Viverra",
        author: "Joanna Wellick",
        date: "June 28, 2018",
        shares: "1K shares",
        excerpt: "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
        image: blog1,
        tags: ["Aenean Eleifend", "Aliquam"]
      },
      {
        id: 2,
        title: "Sustainable Waste Management Solutions",
        author: "Sarah Johnson",
        date: "June 25, 2018",
        shares: "856 shares",
        excerpt: "Exploring innovative approaches to waste management and recycling that benefit both environment and economy. Latest trends in sustainable practices.",
        image: blog2,
        tags: ["Sustainability", "Recycling"]
      },
      {
        id: 3,
        title: "E-Waste Recycling: Future Prospects",
        author: "Michael Chen",
        date: "June 22, 2018",
        shares: "742 shares",
        excerpt: "The growing importance of electronic waste management in our digital age. How proper e-waste recycling can create value and protect environment.",
        image: blog3,
        tags: ["E-Waste", "Technology"]
      },
      {
        id: 4,
        title: "Plastic EPR Implementation Guide",
        author: "Emma Rodriguez",
        date: "June 20, 2018",
        shares: "923 shares",
        excerpt: "Understanding Extended Producer Responsibility for plastic waste. A comprehensive guide to compliance and best practices for businesses.",
        image: blog4,
        tags: ["Plastic EPR", "Compliance"]
      }
    ]
  
    return (
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4"> Blogs</h2>
            <p className="text-gray-600 text-lg">Stay updated with the latest insights on waste management and sustainability</p>
          </div>
  
          {/* Blog Grid - 2 per row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-35 left-50px top-345px mb-12 w-hug575px h-hug817px ">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-gray-300 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full  h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Tags Overlay */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    {post.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
  
                {/* Content Container */}
                <div className="bg-[#E0EBCB] w-575px h-817px p-8">
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-900 transition-colors">
                    {post.title}
                  </h3>
  
                  {/* Author and Date */}
                  <div className="flex items-center gap-4 mb-4 bg-[#E0EBCB]">
                    <div className="flex items-center gap-2 bg-[#E0EBCB]">
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                        <span className="text-sm font-semibold text-gray-600">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <span className="text-gray-700 font-medium">{post.author}</span>
                    </div>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-500">{post.date}</span>
                    <span className="text-gray-500">•</span>
                    <div className="flex items-center gap-1 text-gray-500">
                      <Share2 className="w-4 h-4" />
                      <span>{post.shares}</span>
                    </div>
                  </div>
  
                  {/* Excerpt */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
  
                  {/* View Post Button */}
                  <button className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold transition-colors group/btn">
                    <Eye className="w-4 h-4" />
                    <span>View Post</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
  
          {/* Load More Button */}
          <div className="text-center">
            <button className="bg-white border-2 border-gray-300 hover:border-green-500 text-gray-700 hover:text-green-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-md">
              Load More
            </button>
          </div>
        </div>
      </section>
    )
  }
  
  export default BlogSection
  