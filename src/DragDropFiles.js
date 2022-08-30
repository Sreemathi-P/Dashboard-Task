import { useState, useRef } from "react";
import { BsCloudUpload } from "react-icons/bs";
import './DragDropFiles.css';
import Header from "./header";
import SideBarnew from "./SideBarnew";

const DragDropFiles = () => {
    const [files, setFiles] = useState(null);
    const inputRef = useRef();

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event) => {
        event.preventDefault();
        setFiles(event.dataTransfer.files)
    };

    // send files to the server
    const handleUpload = () => {
        const formData = new FormData();
        formData.append("Files", files);
        console.log(formData.getAll())
    };

    return (
        <>
            <Header />
            <div>
                <SideBarnew/>
                            <div
                                className="dropzone"
                                onDragOver={handleDragOver}
                                onDrop={handleDrop}
                            >
                                <BsCloudUpload className="upload-icon" size={70} />
                                <h3>Drag and drop files or
                                    <input
                                        type="file"
                                        multiple
                                        onChange={(event) => setFiles(event.target.files)}
                                        hidden
                                        accept=".csv, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                                        ref={inputRef}
                                    />
                                    <button className="browse-button" onClick={() => inputRef.current.click()}>Browse</button>
                                </h3>
                                <p>Supported formate: CSV, Excel</p>
                            </div>
                            {
                                !files && <>
                                    <div className="actions">
                                        <button type="button" className="dis-button" onClick={handleUpload} disabled>UPLOAD FILE</button>
                                    </div>
                                </>
                            }
                            {
                                files && <>
                                    <div className="actions">
                                        <button className="enable-button-danger" onClick={() => { setFiles(null); window.location.reload(true) }}>Cancel</button>
                                        <button type="button" className="enable-button" onClick={handleUpload} >Upload</button>
                                    </div>
                                </>
                            }
                        </div>
        </>
    );
};

export default DragDropFiles;