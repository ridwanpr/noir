import { StarIcon } from "../../../components/common/Icons";
import SectionDivider from "../../../components/common/SectionDivider/SectionDivider";

const MovieReviews = ({ data, isLoading }) => {
  if (isLoading) return null;

  return (
    <>
      <SectionDivider />
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-white">Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.data.length > 0 ? (
              data.data.map((review) => (
                <div
                  key={review.id}
                  className="bg-white/[.03] border border-white/[.07] rounded-xl p-6 transition-all duration-300 ease-in-out hover:bg-white/[.05] hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)]"
                >
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      <StarIcon />
                    </div>
                    <span className="ml-2 text-sm text-gray-400">
                      {review.rating}/5
                    </span>
                  </div>
                  <h4 className="font-semibold text-white mb-1">
                    {review.review_title}
                  </h4>
                  <p className="text-xs text-gray-500 mb-3">
                    {review.user.name}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed font-light">
                    {review.review_body}
                  </p>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center">
                <p className="text-gray-400 text-sm">No reviews yet</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default MovieReviews;
