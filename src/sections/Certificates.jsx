import { useState } from "react"

const certificates = [
  {
    id: 1,
    name: "Ethical Hacking",
    img: new URL("../assets/certificates/ethical-hacking.png", import.meta.url).href,
  },
  {
    id: 2,
    name: "Python Advanced",
    img: new URL("../assets/certificates/python-advanced.png", import.meta.url).href,
  },
  {
    id: 3,
    name: "Cyber Security",
    img: new URL("../assets/certificates/cyber-security.png", import.meta.url).href,
  },
  {
    id: 4,
    name: "C Sharp",
    img: new URL("../assets/certificates/csharp.png", import.meta.url).href,
  },
  {
    id: 5,
    name: "CSS",
    img: new URL("../assets/certificates/css.png", import.meta.url).href,
  },
  {
    id: 6,
    name: "HTML Advanced",
    img: new URL("../assets/certificates/html-advanced.png", import.meta.url).href,
  },
  {
    id: 7,
    name: "Java",
    img: new URL("../assets/certificates/java.png", import.meta.url).href,
  },
  {
    id: 8,
    name: "JavaScript",
    img: new URL("../assets/certificates/javascript.png", import.meta.url).href,
  },
  {
    id: 9,
    name: "Ethical Hacking Advanced",
    img: new URL("../assets/certificates/ethical-hacking-advanced.png", import.meta.url).href,
  },
]

export default function Certificates() {
  const [showAll, setShowAll] = useState(false)
  const [selectedCert, setSelectedCert] = useState(null)

  const displayedCerts = showAll ? certificates : certificates.slice(0, 3)

  return (
    <section
      id="certificates"
      className="py-16 bg-cyber-black dark:bg-cyber-blue text-white text-center px-4"
    >
      <h2 className="text-3xl font-bold mb-8 text-cyber-green dark:text-cyber-lightBlue">
        Certificates
      </h2>

      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {displayedCerts.map((cert) => (
          <div
            key={cert.id}
            className="bg-gray-900 dark:bg-gray-800 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg"
            onClick={() => setSelectedCert(cert)}
          >
            <img
              src={cert.img}
              alt={cert.name}
              className="w-full h-32 sm:h-40 object-cover"
            />
            <p className="py-2 text-cyber-green dark:text-cyber-lightBlue font-semibold text-sm sm:text-base">
              {cert.name}
            </p>
          </div>
        ))}
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setShowAll(!showAll)}
        className="mt-6 px-6 py-2 bg-cyber-green text-black font-bold rounded-lg hover:bg-green-400 dark:hover:bg-cyber-lightBlue transition"
      >
        {showAll ? "View Less Certificates" : "View All Certificates"}
      </button>

      {/* Modal */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="relative bg-white dark:bg-gray-900 p-6 rounded-lg max-w-3xl w-full shadow-xl">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-2 right-2 text-black dark:text-white font-bold text-2xl hover:scale-110 transition"
            >
              ✖
            </button>
            <img
              src={selectedCert.img}
              alt={selectedCert.name}
              className="w-full h-auto rounded-lg"
            />
            <p className="mt-4 text-lg font-bold text-center text-cyber-green dark:text-cyber-lightBlue">
              {selectedCert.name}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
