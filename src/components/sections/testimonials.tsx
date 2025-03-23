import Image from "next/image";
import Link from "next/link";

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-mission-navy mb-12">
          Success Stories
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Testimonial Card */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-green-600 relative min-h-[200px] md:min-h-full">
                <Image
                  src="https://ext.same-assets.com/858521533/3755446992.png"
                  alt="Boston Celtics"
                  fill
                  className="object-cover p-4"
                />
              </div>
              <div className="p-6">
                <blockquote className="text-gray-600 italic mb-4">
                  "Mission has been an incredible partner, bringing impressive and extensive AWS cloud management expertise."
                </blockquote>
                <div className="font-medium text-mission-navy">Jay Wessland</div>
                <div className="text-sm text-gray-500 mb-4">VICE PRESIDENT AND CTO</div>
                <div className="text-sm text-gray-500">Boston Celtics</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold text-mission-navy mb-6">
            Stay Ahead of the Curve
          </h3>

          <div className="inline-block px-4 py-2 rounded-full bg-black text-white mb-8">
            AI Resources
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Blog Card 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="p-6">
                <div className="aspect-video mb-4 bg-gray-200 relative">
                  <Image
                    src="https://ext.same-assets.com/1166463948/1853199322.jpeg"
                    alt="Blog Post"
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <div className="text-sm text-gray-500 mb-2">Published on Mar 12</div>
                <h4 className="font-medium text-mission-navy mb-4">Create Voice AI + Muppet Dating Apps</h4>
                <div className="flex space-x-2 mb-4">
                  <span className="px-2 py-1 text-xs bg-gray-100 rounded text-gray-600">AI/ML</span>
                </div>
                <Link
                  href="#"
                  className="text-mission-orange font-medium text-sm"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Blog Card 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="p-6">
                <div className="aspect-video mb-4 bg-gray-200 relative">
                  <Image
                    src="https://ext.same-assets.com/3319787766/1675322154.jpeg"
                    alt="Blog Post"
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <div className="text-sm text-gray-500 mb-2">Published on Mar 6</div>
                <h4 className="font-medium text-mission-navy mb-4">On the humanity?</h4>
                <div className="flex space-x-2 mb-4">
                  <span className="px-2 py-1 text-xs bg-gray-100 rounded text-gray-600">AI/ML</span>
                </div>
                <Link
                  href="#"
                  className="text-mission-orange font-medium text-sm"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Blog Card 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="p-6">
                <div className="aspect-video mb-4 bg-gray-200 relative">
                  <Image
                    src="https://ext.same-assets.com/3787534985/4119317154.png"
                    alt="Blog Post"
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <div className="text-sm text-gray-500 mb-2">Published on Mar 15</div>
                <h4 className="font-medium text-mission-navy mb-4">Focusing on your Superpowers</h4>
                <div className="flex space-x-2 mb-4">
                  <span className="px-2 py-1 text-xs bg-gray-100 rounded text-gray-600">AI/ML</span>
                </div>
                <Link
                  href="#"
                  className="text-mission-orange font-medium text-sm"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
