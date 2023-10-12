import AWS from "aws-sdk";

AWS.config.update({ region: "us-east-1" });

interface ImageInterface {
  name: string;
  data: Buffer;
  mimetype: string;
}

const s3 = new AWS.S3({
  credentials: {
    accessKeyId: "AKIA4PA6PEZSR2RSEQCN",
    secretAccessKey: "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",
  },
});

const uploadFile = (image: ImageInterface) => {
  const uploadParams = {
    Bucket: "newspapers-images",
    Key: image.name,
    Body: Buffer.from(image.data),
    ContentType: image.mimetype,
    ACL: "public-read",
  };

  s3.upload(uploadParams, (err: any, data: any) => {
    if (err) {
      console.log(err);
    } else {
      return data.Location;
    }
  });
};

export default {
  uploadFile,
};
