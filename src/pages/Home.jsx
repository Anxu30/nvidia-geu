import { useState, useEffect } from "react";
import "./Home.css";
import HamburgerMenu from "../components/HamburgerMenu"; // ✅ new import

const images = [
  "AK919340.jpg",
  "AK919344.jpg",
  "AK919348.jpg",
  "AK919372.jpg",
  "AK919380.jpg",
  "AK919384.jpg",
  "AK919388.jpg",
  "AK919415.jpg",
  "AK919416.jpg",
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="home-wrapper">
      <HamburgerMenu />

      <main className="home-content">
        <section className="hero">
          
          <h1>Accelerate research with DGX-powered performance</h1>
          <p className="subtitle">
            Explore high-resolution visuals from the lab and review the DGX B200
            hardware stack that powers AI-first breakthroughs.
          </p>
        </section>

        <section className="slider-section" aria-label="Campus highlight slider">
          <div
            className="slider"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {images.map((img, index) => (
              <div className="slide" key={index}>
                <img src={img} alt={`Campus highlight ${index + 1}`} />
              </div>
            ))}
          </div>

          <button
            className="prev"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            ❮
          </button>
          <button className="next" onClick={nextSlide} aria-label="Next slide">
            ❯
          </button>

          <div className="dots" role="tablist" aria-label="Select slider image">
            {images.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === current ? "active-dot" : ""}`}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-pressed={i === current}
              />
            ))}
          </div>
        </section>

        <section className="box hardware-section">
          <h2 className="box-title">DGX B200 hardware overview</h2>
          <img className="box-img2" src="/Slide3.JPG" alt="DGX B200 chassis" />

          <div className="dgx-specs">
            <div className="table-scroll">
              <table className="spec-table">
                <caption>Key specifications for the NVIDIA DGX B200</caption>
                <tbody>
                  <tr>
                    <th>GPU</th>
                    <td>8 × NVIDIA B200 Tensor Core GPUs</td>
                  </tr>
                  <tr>
                    <th>GPU Memory</th>
                    <td>8 × 180 GB = 1440 GB total</td>
                  </tr>
                  <tr>
                    <th>Performance</th>
                    <td>
                      72 petaFLOPS FP8 training
                      <br />
                      144 petaFLOPS FP4 inference
                    </td>
                  </tr>
                  <tr>
                    <th>NVswitches</th>
                    <td>2 × 5th generation NVLink</td>
                  </tr>
                  <tr>
                    <th>CPUs</th>
                    <td>2 × Intel® Xeon® Platinum 8570 processors</td>
                  </tr>
                  <tr>
                    <th>System Memory</th>
                    <td>2 TB default (up to 4 TB)</td>
                  </tr>
                  <tr>
                    <th>Networking</th>
                    <td>
                      4 × OSFP ports with 8 × NVIDIA ConnectX-7s
                      <br />• 8 × 400 Gb/s InfiniBand/Ethernet
                      <br />• 2 × dual-port NVIDIA BlueField 3 DPU
                      <br />• 2 × 400 Gb/s InfiniBand/Ethernet per card
                    </td>
                  </tr>
                  <tr>
                    <th>Cache Storage</th>
                    <td>8 × U.2 3.84 TB NVMe self-encrypting drives</td>
                  </tr>
                  <tr>
                    <th>Boot Storage</th>
                    <td>2 × 1.92 TB M.2 NVMe (software encryptable)</td>
                  </tr>
                  <tr>
                    <th>Host Management</th>
                    <td>On-board 10 Gb/s RJ-45 Ethernet</td>
                  </tr>
                  <tr>
                    <th>Remote Management</th>
                    <td>
                      Baseboard Management Controller (BMC)
                      <br />• 1 Gb/s RJ-45 network connectivity
                      <br />• Remote KVM + storage
                      <br />• RedFish, IPMI management
                    </td>
                  </tr>
                  <tr>
                    <th>Operating System</th>
                    <td>
                      DGX OS 7 based on Ubuntu 24.04 LTS
                      <br />
                      Ubuntu &amp; Red Hat Enterprise Linux 8 &amp; 9
                      <br />
                      Rocky Linux
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
