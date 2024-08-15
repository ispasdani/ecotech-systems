import React from "react";
import styles from "@/components/ImageBackground/styles.module.scss";

type ImageBackgroundProps = {
  backgroundImage: string;
};

const ImageBackground = ({ backgroundImage }: ImageBackgroundProps) => {
  return (
    <div
      className={styles.imageBackground}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    ></div>
  );
};

export default ImageBackground;
