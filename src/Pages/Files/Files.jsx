import React, { useRef } from "react";
import "./Files.css";
import { RiUploadCloud2Line } from "react-icons/ri";
import axios from "axios";
import { Toaster, toast } from "sonner";

export default function Files() {
  const fileInputRef = useRef();
  const imageInputRef = useRef();
  const url = "http://localhost:8000/aws/upload";

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", fileInputRef.current.files[0]);
      formData.append("image", imageInputRef.current.files[0]);
      const token = localStorage.getItem("token");
      const response = await axios.post(url, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success(response.data.message);
    } catch (error) {
      console.error(error);
      toast.error("Error al subir los archivos");
    }
  };
  return (
    <div className="containerFiles">
      <Toaster position="top-right" />
      <input type="text" name="name" id="name" placeholder="Nombre" />
      <input
        type="text"
        name="description"
        id="description"
        placeholder="Descripción"
      />
      <div className="dashedContainer">
        <RiUploadCloud2Line className="iconUpload" />
        <p>Selecciona un archivo de tu dispositivo</p>
        <span>max. 10MB</span>
        <input
          type="file"
          ref={fileInputRef}
          name="file"
          style={{ display: "none" }}
        />
      </div>
      <div className="dashedContainer">
        <RiUploadCloud2Line className="iconUpload" />
        <p>Selecciona una imagen de tu dispositivo</p>
        <span>max. 10MB</span>
        <input
          type="file"
          name="image"
          ref={imageInputRef}
          style={{ display: "none" }}
        />
      </div>
      <button className="buttonSubmit" onClick={handleUpload}>
        Subir
      </button>
    </div>
  );
}
