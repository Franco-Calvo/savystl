import React, { useRef } from "react";
import "./Files.css";
import { RiUploadCloud2Line } from "react-icons/ri";
import axios from "axios";
import { Toaster, toast } from "sonner";

export default function Files() {
  const fileInputRef = useRef(null);
  const imageInputRef = useRef(null);

  const url = "http://localhost:8000/upload";

  async function handleUpload() {
    const file = fileInputRef.current.files[0];
    const name = imageInputRef.current.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name); // Agrega los datos adicionales necesarios

    try {
      const res = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.message);
    }
  }

  function handleClick() {
    fileInputRef.current.click();
  }

  return (
    <div className="containerFiles">
      <Toaster position="top-right" />
      <div className="dashedContainer" onClick={handleClick}>
        <RiUploadCloud2Line className="iconUpload" />
        <p>Selecciona un archivo de tu dispositivo</p>
        <span>max. 10MB</span>
        <input
          type="file"
          name="file"
          ref={fileInputRef}
          style={{ display: "none" }}
        />
      </div>

      <div className="dashedContainer" onClick={handleClick}>
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
      <span>
        <label htmlFor="">Nombre</label>
        <input type="text" placeholder="Nombre" />
      </span>
      <span>
        <label htmlFor="">Nombre</label>
        <input type="text" placeholder="Nombre" />
      </span>
      <span>
        <label htmlFor="">Nombre</label>
        <input type="text" placeholder="Nombre" />
      </span>
      <span>
        <label htmlFor="">Nombre</label>
        <input type="text" placeholder="Nombre" />
      </span>
      <input type="file" ref={fileInputRef} style={{ display: "none" }} />
      <button className="buttonSubmit" onClick={handleUpload}>
        Subir
      </button>
    </div>
  );
}
