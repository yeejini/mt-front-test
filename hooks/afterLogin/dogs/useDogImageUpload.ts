import { useState, useRef } from "react";
import { presignedUrlApi } from "@/apis/common/presignedUrl";
import { imageFileSchema } from "@/schemas/fileSchema";

export default function useDogImageUpload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [fileError, setFileError] = useState<string>("");
  const [isUploading, setIsUploading] = useState(false);
<<<<<<< HEAD
  const [isDeleted, setIsDeleted] = useState(false);
=======
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // 에러 초기화
    setFileError("");
<<<<<<< HEAD
    setIsDeleted(false); // 파일 선택 시 삭제 상태 해제
=======
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451

    // Zod를 사용한 파일 검증
    const validation = imageFileSchema.safeParse(file);

    if (!validation.success) {
      const errorMessage =
        validation.error.issues[0]?.message || "파일 업로드에 실패했습니다.";
      setFileError(errorMessage);
      e.target.value = ""; // input 초기화
      return;
    }

    setSelectedFile(file);
    const preview = URL.createObjectURL(file);
    setPreviewUrl(preview);
  };

<<<<<<< HEAD
  const handleImageDelete = () => {
    // 메모리 누수 방지: 기존 previewUrl 해제
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setSelectedFile(null);
    setPreviewUrl("");
    setIsDeleted(true);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

=======
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
  const uploadImage = async (): Promise<string | undefined> => {
    if (!selectedFile) return undefined;

    setIsUploading(true);

    try {
      const presignedUrl = await presignedUrlApi.getPresignedUrl({
        category: "dog-profile",
        fileName: selectedFile.name,
        contentType: selectedFile.type,
      });

      const uploadedImageKey = await presignedUrlApi.uploadToS3(
        presignedUrl,
        selectedFile
      );

      setIsUploading(false);
      return uploadedImageKey;
    } catch (error) {
      setIsUploading(false);
      throw error;
    }
  };

  const cleanup = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
  };

  const resetFileInput = () => {
    setSelectedFile(null);
    setPreviewUrl("");
    setFileError("");
  };

  return {
    selectedFile,
    previewUrl,
    fileError,
    isUploading,
<<<<<<< HEAD
    isDeleted,
    fileInputRef,
    handleFileSelect,
    handleImageDelete,
=======
    fileInputRef,
    handleFileSelect,
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
    uploadImage,
    cleanup,
    resetFileInput,
  };
}
