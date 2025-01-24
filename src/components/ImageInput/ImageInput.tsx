// libraries
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useDropzone } from 'react-dropzone';
import { LuPlus, LuTrash2 } from 'react-icons/lu';

// components
import { Button } from '@/components/Button';

const ImageInput = ({ label, name, isRequired, value, onChange }) => {
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': [],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      );
    },
  });

  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <div className="flex w-full flex-col items-start justify-start gap-2">
      <label htmlFor={name} className="flex items-center justify-start gap-1 text-sm text-default-foreground">
        {label}
        {isRequired && <span className="text-danger">*</span>}
      </label>

      <div className="flex w-full flex-wrap items-start justify-start gap-4">
        <div
          {...getRootProps({
            className:
              'dropzone flex justify-center items-center w-[120px] h-[120px] rounded-lg bg-default-100 hover:bg-default-200 transition cursor-pointer',
          })}
        >
          <input {...getInputProps()} />
          <LuPlus size={20} />
        </div>

        {files.map((file) => (
          <div className="relative flex items-center justify-center" key={file.name}>
            <Button
              color="danger"
              variant="solid"
              size="sm"
              isIconOnly
              className="absolute -left-2 -top-2"
              onPress={() =>
                setFiles((prevState) => prevState.filter((item) => JSON.stringify(item) !== JSON.stringify(file)))
              }
            >
              <LuTrash2 size={20} />
            </Button>

            <Image
              src={file.preview}
              alt={`preview-${file.name}`}
              width={120}
              height={120}
              onLoad={() => {
                URL.revokeObjectURL(file.preview);
              }}
              className="h-[120px] w-[120px] rounded-lg object-cover object-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageInput;
