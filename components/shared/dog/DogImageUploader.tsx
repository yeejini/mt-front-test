import Image from "next/image";
import { memo } from "react";
<<<<<<< HEAD
import { DogIcon } from "@/components/icons/dog";
=======
import { UserIcon } from "@/components/icons/user";
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
import ErrorMessage from "@/components/shared/feedback/ErrorMessage";

interface DogImageUploaderProps {
  previewUrl: string;
  existingImageUrl?: string | null;
  dogId?: number;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  fileError: string;
  isDisabled: boolean;
<<<<<<< HEAD
  isDeleted?: boolean;
  onFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onButtonClick: () => void;
  onImageDelete?: () => void;
=======
  onFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onButtonClick: () => void;
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
}

const DogImageUploader = memo(function DogImageUploader({
  previewUrl,
  existingImageUrl,
  dogId,
  fileInputRef,
  fileError,
  isDisabled,
<<<<<<< HEAD
  isDeleted,
  onFileSelect,
  onButtonClick,
  onImageDelete,
=======
  onFileSelect,
  onButtonClick,
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
}: DogImageUploaderProps) {
  const getPlaceholderColor = () => {
    if (dogId !== undefined) {
      return `hsl(${(dogId * 137.5) % 360}, 70%, 80%)`;
    }
    return "hsl(200, 70%, 80%)";
  };

<<<<<<< HEAD
  const hasImage = previewUrl || (existingImageUrl && !isDeleted);

=======
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
  return (
    <div className="flex flex-col items-center gap-2">
      {previewUrl ? (
        <div className="relative size-30 rounded-full overflow-hidden bg-blue-300">
          <Image
            src={previewUrl}
            alt="반려견 프로필 미리보기"
            fill
            sizes="120px"
            className="object-cover"
            unoptimized
          />
        </div>
<<<<<<< HEAD
      ) : existingImageUrl && !isDeleted ? (
=======
      ) : existingImageUrl ? (
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
        <div className="relative size-30 rounded-full overflow-hidden bg-blue-300">
          <Image
            src={existingImageUrl}
            alt="반려견 프로필"
            fill
            sizes="120px"
            className="object-cover"
            priority
          />
        </div>
      ) : (
        <div
          className="flex items-center justify-center relative size-30 rounded-full overflow-hidden"
          style={{
            backgroundColor: getPlaceholderColor(),
          }}
        >
<<<<<<< HEAD
          <DogIcon className="size-16 text-white" />
=======
          <UserIcon className="size-16 text-white" />
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
        </div>
      )}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={onFileSelect}
        className="hidden"
      />
<<<<<<< HEAD
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onButtonClick}
          disabled={isDisabled}
          className="text-sm text-(--mt-gray) disabled:opacity-50 disabled:cursor-not-allowed hover:text-(--mt-blue-point)"
          aria-label={previewUrl ? "이미지 변경" : "이미지 선택"}
        >
          {previewUrl ? "이미지 변경" : "이미지 선택"}
        </button>
        {hasImage && onImageDelete && (
          <button
            type="button"
            onClick={onImageDelete}
            disabled={isDisabled}
            className="text-sm text-red-500 disabled:opacity-50 disabled:cursor-not-allowed hover:text-red-700"
            aria-label="이미지 삭제"
          >
            이미지 삭제
          </button>
        )}
      </div>
=======
      <button
        type="button"
        onClick={onButtonClick}
        disabled={isDisabled}
        className="text-sm text-(--mt-gray) disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label={previewUrl ? "이미지 변경" : "이미지 선택"}
      >
        {previewUrl ? "이미지 변경" : "이미지 선택"}
      </button>
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451

      <ErrorMessage message={fileError} className="w-full text-center" />
    </div>
  );
});

export default DogImageUploader;
