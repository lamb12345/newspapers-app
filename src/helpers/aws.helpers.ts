import AWS from "aws-sdk";

import url from "url";

import * as dotenv from "dotenv";

dotenv.config();

AWS.config.update({ region: "us-east-1" });

interface ImageInterface {
  name: string;
  data: Buffer;
  mimetype: string;
}

const s3 = new AWS.S3({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  },
});

const uploadFile = async (image: ImageInterface) => {
  const timestamp = new Date().getTime();
  const key = `${image.name}-${timestamp}`;

  return new Promise(
    (resolve: (data: any) => void, reject: (error: any) => void) => {
      const uploadParams = {
        Bucket: process.env.AWS_BUCKET_NAME as string,
        Key: key,
        Body: Buffer.from(image.data),
        ContentType: image.mimetype,
        ACL: "public-read",
      };

      s3.upload(uploadParams, (err: any, data: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(data.Location);
        }
      });
    }
  );
};

const deleteFile = async (imageUrl: string) => {
  const parsedUrl = url.parse(imageUrl);
  const imageName = parsedUrl.pathname?.slice(1);

  return new Promise(
    (resolve: (data: any) => void, reject: (error: any) => void) => {
      const params = {
        Bucket: process.env.AWS_BUCKET_NAME as string,
        Key: imageName as string,
      };
      s3.deleteObject(params, (err: any, data: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(data.Location);
        }
      });
    }
  );
};

export default {
  uploadFile,
  deleteFile,
};
