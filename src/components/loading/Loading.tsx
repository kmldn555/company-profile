import { HugeiconsIcon } from "@hugeicons/react";
import { LoaderIcon } from "@hugeicons/core-free-icons";

function Loading() {
  return (
    <HugeiconsIcon
      icon={LoaderIcon}
      className="animate-spin"
      size="50px"
      color="#004AC6"
    />
  );
}

export default Loading;
