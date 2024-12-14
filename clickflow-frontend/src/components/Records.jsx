import Button from "./ui/Button";
import amplifier from "../assets/screen-amplifier.jpg";

function Records() {
  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-semibold text-white mb-2">
            Records
          </h1>
          <p className="text-white">Yours tasks records will be shown here</p>
        </div>

        <div className="bg-darkbg100 rounded-xl shadow-sm p-4 md:p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <time className="text-sm text-white">
              Sat, 12 Oct 2024 17:26:55 GMT
            </time>
            <span className="px-3 py-1 bg-green-200 text-green-600 rounded-full text-sm font-medium">
              Pending
            </span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="relative w-16 h-16 md:w-20 md:h-20">
              <img
                src={amplifier}
                alt="Screen Enlarger"
                className="object-cover rounded-lg"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-lg md:text-xl font-medium text-white mb-1">
                Screen Enlarger High Quality
              </h3>
              <p className="text-lg text-white font-semibold">86899.72</p>
            </div>
          </div>
        </div>

        <div className="bg-darkbg100 rounded-xl shadow-sm p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-white">Total Amount</h4>
              <p className="text-2xl font-bold text-white">86899.72</p>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-medium text-white">
                Today&apos;s Commissions
              </h4>
              <p className="text-2xl font-bold text-white">5243.36</p>
            </div>
          </div>
        </div>

        <Button width={"full"}>Submit</Button>
      </div>
    </div>
  );
}

export default Records;
