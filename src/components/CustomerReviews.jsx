import React from 'react'
import { Star } from 'lucide-react'
import { motion } from 'framer-motion'

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Michael Z.",
      date: "Sep 23, 2025",
      rating: 5,
      title: "Complete renovation",
      content: "Hiring Green Collar was like assembling my own Landscaping Avengers. Every crew member brought a unique 'superpower' to the job—precision work, creative design ideas, flawless hardscaping, and meticulous cleanup. Just like the Avengers, they worked seamlessly as a team, combining their strengths to transform my yard into something extraordinary. The results? Nothing short of heroic.",
    },
    {
      id: 2,
      name: "Nick T.",
      date: "Sep 1, 2025",
      rating: 5,
      title: "Patio Remodel",
      content: "If you're looking for a reliable, experienced, and hardworking company, then Green Collar Landscaping will easily surpass your expectations. The company executed every discussed detail, while also being competitive with their pricing. They are first on my list for any future projects.",
    },
    {
      id: 3,
      name: "Elizabeth B.",
      date: "May 28, 2025",
      rating: 5,
      title: "Full Backyard Renovation",
      content: "We recently hired Tony and Randall from Green Collar Landscaping WA for a full backyard renovation — and we are absolutely thrilled with the results! The project included demolition of our old concrete, installation of gorgeous Belgard Rio pavers, and the creation of two stunning landing areas for our stairways. They also installed integrated lighting that adds both safety and ambiance. From start to finish, Tony and Randall were timely, responsive, and detail-oriented. They were consummate professionals — tidy, respectful of our space, and they cleaned up thoroughly at the end of each day. We will definitely be working with Green Collar Landscaping WA again on future projects. Highly, highly recommend!",
    },
    {
      id: 4,
      name: "Diana M.",
      date: "Mar 19, 2025",
      rating: 5,
      title: "Outstanding Professionalism",
      content: "Tony and Randal responded immediately to my request for an estimate on the job, and scheduled a time to come to my home to view what was needed. They were prompt, extremely personable, very enthusiastic, and listened carefully to what I needed. They even provided ideas of their own to consider that would make the project even better. I would highly recommend them for consideration because of their professionalism and responsiveness!",
    },
    {
      id: 5,
      name: "Brandon B.",
      date: "Dec 11, 2024",
      rating: 5,
      title: "Excellent Service",
      content: "Great guys, they came out to the site gave me an estimate and were able to get the bushes under control I had on a hillside as well as clear out undergrowth and put down new bark. Would definitely recommend them to anyone needing landscaping work done. Gave me a fair price and did amazing work. 10/10 would hire again for any landscape needs.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const StarRating = ({ rating }) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < rating ? 'fill-forest-green text-forest-green' : 'text-gray-300'}
        />
      ))}
    </div>
  )

  return (
    <section
      className="py-16 bg-white"
      id="reviews"
      aria-label="Customer reviews"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-heading font-bold text-slate-grey mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trusted by homeowners across the Pacific Northwest. Read what our satisfied clients have to say about their experience with Green Collar Landscaping.
            </p>
          </motion.div>

          {/* Rating Summary */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8 inline-block"
          >
            <div className="bg-gradient-to-r from-forest-green/10 to-emerald-600/10 rounded-lg p-6 border-2 border-forest-green/20">
              <div className="flex items-center justify-center gap-4">
                <div>
                  <div className="text-4xl font-bold text-forest-green">5.0</div>
                  <div className="text-sm text-gray-600">18 Reviews</div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={24}
                        className="fill-forest-green text-forest-green"
                      />
                    ))}
                  </div>
                  <div className="text-sm font-semibold text-forest-green">Exceptional Rating</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Reviews Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              variants={itemVariants}
              className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md border-2 border-forest-green/10 hover:border-forest-green/30 transition-all duration-300 hover:shadow-lg"
            >
              {/* Stars */}
              <div className="mb-3">
                <StarRating rating={review.rating} />
              </div>

              {/* Review Title */}
              <h3 className="text-lg font-bold text-slate-grey mb-3">
                {review.title}
              </h3>

              {/* Review Content */}
              <p className="text-gray-600 text-sm mb-4 line-clamp-4">
                {review.content}
              </p>

              {/* Reviewer Info */}
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-slate-grey">{review.name}</p>
                    <p className="text-xs text-gray-500">{review.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-forest-green font-semibold">Verified</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Thumbtack Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.thumbtack.com/wa/tacoma/landscaping/green-collar-landscaping/service/486378978894700574"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-forest-green hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
            aria-label="View all reviews on Thumbtack"
          >
            View All Reviews on Thumbtack
          </a>
          <p className="text-gray-600 text-sm mt-4">
            All reviews sourced from verified Thumbtack customers
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default CustomerReviews
