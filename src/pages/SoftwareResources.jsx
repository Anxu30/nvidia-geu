import React from "react";
import "./SoftwareResources.css";
import HamburgerMenu from "../components/HamburgerMenu";

const softwares = [
  { 
    name: "CUDA", 
    desc: "CUDA is a parallel computing platform and programming model developed by NVIDIA for general computing on graphical processing units (GPUs). With CUDA, developers can dramatically speed up computing applications by harnessing the power of GPUs.", 
    link: "https://catalog.ngc.nvidia.com/orgs/nvidia/containers/cuda?version=13.0.2-cudnn-devel-ubuntu22.04" 
  },
  { 
    name: "CUDA Quantum", 
    desc: "CUDA Quantum is a comprehensive framework for quantum programming.", 
    link: "https://catalog.ngc.nvidia.com/orgs/nvidia/teams/quantum/containers/cuda-quantum" 
  },
  { 
    name: "Python", 
    desc: "Versatile programming language widely used for scientific computing, AI, and data analysis.", 
    link: "https://catalog.ngc.nvidia.com/orgs/nvidia/teams/distroless/containers/python?version=3.13-v3.1.1" 
  },
  { 
    name: "PyTorch", 
    desc: "PyTorch is an optimized tensor library for deep learning using GPUs and CPUs. Automatic differentiation is done with a tape-based system at both a functional and neural network layer level. This functionality brings a high level of flexibility and speed as a deep learning framework and provides accelerated NumPy-like functionality.", 
    link: "https://catalog.ngc.nvidia.com/orgs/nvidia/containers/pytorch?version=25.11-py3" 
  },
  { 
    name: "TensorFlow", 
    desc: "The l4t-tensorflow docker image contains TensorFlow pre-installed in a Python 3 environment to get up & running quickly with TensorFlow on Jetson. These containers support the following releases of JetPack for Jetson Nano, TX1/TX2, Xavier NX, AGX Xavier, AGX Orin, Orin NX, and Orin Nano:", 
    link: "https://catalog.ngc.nvidia.com/orgs/nvidia/containers/l4t-tensorflow?version=r35.3.1-tf2.11-py3" 
  },
  { 
    name: "Jupyter Notebook", 
    desc: "Interactive web-based environment for creating and sharing computational notebooks.", 
    link: "https://catalog.ngc.nvidia.com/search?filters=resourceType|Resource|recipe&orderBy=scoreDESC&query=notebook&page=&pageSize=" 
  },
  { 
    name: "MONAI", 
    desc: "Open-source PyTorch framework for deep learning in medical imaging and healthcare research.", 
    link: "https://catalog.ngc.nvidia.com/orgs/nvidia/teams/clara/containers/monai-toolkit?version=3.0" 
  },
  { 
    name: "MATLAB", 
    desc: "High-performance environment for numerical computing, algorithms, and visualization.", 
    link: "https://catalog.ngc.nvidia.com/orgs/partners/containers/matlab?version=r2024a" 
  },
  { 
    name: "GROMACS", 
    desc: "Molecular dynamics package optimized for simulating proteins, lipids, and nucleic acids.", 
    link: "https://catalog.ngc.nvidia.com/orgs/hpc/containers/gromacs?version=2023.2" 
  },

  // ================= NEW ITEMS BELOW ================

  { 
    name: "Omniverse", 
    desc: "A 3D collaboration and simulation platform for real-time design, rendering, robotics, and digital twin development.", 
    link: "https://catalog.ngc.nvidia.com/orgs/nvidia/containers/omniverse-replicator" 
  },

  { 
    name: "Morpheus", 
    desc: "GPU-accelerated cybersecurity AI framework for real-time log analysis, anomaly detection, and threat intelligence.", 
    link: "https://catalog.ngc.nvidia.com/orgs/nvidia/teams/morpheus/containers/morpheus" 
  },

  { 
    name: "AI Perception Service (Jetson / DeepStream)", 
    desc: "End-to-end accelerated vision & multi-sensor perception framework optimized for NVIDIA Jetson and edge AI.", 
    link: "https://catalog.ngc.nvidia.com/orgs/nvidia/teams/jps/containers/deepstream?version=7.1-public-v1" 
  },

  { 
    name: "NeMo", 
    desc: "NVIDIA toolkit for building, training, and deploying large language models, speech AI, and multimodal models.", 
    link: "https://catalog.ngc.nvidia.com/orgs/nvidia/containers/nemo" 
  },
  { 
    name: "ParaView",
    desc: "High-performance open-source tool for large-scale scientific visualization and 3D data analytics.",
    link: "https://catalog.ngc.nvidia.com/orgs/nvidia-hpcvis/containers/paraview"
  }

 
];



const SoftwareResources = () => {
  return (
    <section className="software-shell">
      <HamburgerMenu />
      <div className="software-hero">
        <p className="eyebrow">Stack</p>
        <h1>Software Resources</h1>
        <p>
          The HPC facility supports a wide range of scientific and engineering software packages for research and
          development.
        </p>
      </div>

      <div className="software-grid">
  {softwares.map((item) => (
    <a
      className="software-card"
      key={item.name}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h3>{item.name}</h3>
      <p>{item.desc}</p>
    </a>
  ))}
</div>

    </section>
  );
};

export default SoftwareResources;
