import React, {useState, useCallback} from "react";
import {useDropzone} from "react-dropzone";
import Image from "next/image";

// INTERNAL IMPORT
import Style from "./DropZone.module.css";
import images from "../../img";

const DropZone = ({
    title,
    heading,
    subHeading,
    name,
    description,
    category,
    setImage,
    uploadIPFS
}) => {

    const [fileUrl, setFileUrl] = useState(null);

    const onDrop = useCallback(async(acceptedFile) => {
        const url = await uploadIPFS(acceptedFile[0]);
        setFileUrl(url);
        setImage(url);
    });

    const {getRootProps, getInputProps} = useDropzone({
        onDrop,
        accept: "image/*",
        maxSize: 5000000
    });

    return (
        <div className={Style.DropZone}>

            <div className={Style.DropZone_box} {...getRootProps()}>
                <input {...getInputProps()}/>
                <div className={Style.DropZone_box_input}>
                    <p>{title}</p>
                    <div className={Style.DropZone_box_input_img}>
                        <Image
                            src={images.upload}
                            alt="upload"
                            width={100}
                            height={100}
                            className={Style.DropZone_box_input_img_img}
                        />
                    </div>
                    <p>{heading}</p>
                    <p>{subHeading}</p>
                </div>
            </div>

            {fileUrl && (
                <aside className={Style.DropZone_box_aside}>
                    <div className={Style.DropZone_box_aside_box}>
                        <Image
                            src={fileUrl}
                            alt="nft image"
                            width={200}
                            height={200}
                        />

                        <div className={Style.DropZone_box_aside_box_preview}>
                            <div className={Style.DropZone_box_aside_box_preview_one}>
                                <p>
                                    <span>Tên:&nbsp;</span>
                                    {name || ""}
                                </p>
                            </div>

                            <div className={Style.DropZone_box_aside_box_preview_two}>
                                <p>
                                    <span>Miêu tả:&nbsp;</span>
                                    {description || ""}
                                </p>
                            </div>

                            <div className={Style.DropZone_box_aside_box_preview_three}>
                                <p>
                                    <span>Danh mục:&nbsp;</span>
                                    {category || ""}
                                </p>
                            </div>

                        </div>

                    </div>
                </aside>
            )}
        </div>
    )
}

export default DropZone;