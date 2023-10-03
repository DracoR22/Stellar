"use client"

import ConfirmModal from "@/components/modals/ConfirmModal"
import { Button } from "@/components/ui/button"
import { Trash } from "lucide-react"

interface ChapterActionsProps {
    disabled: boolean
    courseId: string
    chapterId: string
    isPublished: boolean
}

const ChapterActions = ({disabled, courseId, chapterId, isPublished}: ChapterActionsProps) => {
  return (
    <div className="flex items-center gap-x-2">
      <Button onClick={() => {}} isLoading={disabled} variant="outline" disabled={disabled}>
        {isPublished ? "Unpublish" : "Publish"}
      </Button>
      <ConfirmModal onConfirm={() => {}}>
      <Button size="sm" variant="destructive">
        <Trash className="h-4 w-4"/>
      </Button>
      </ConfirmModal>
    </div>
  )
}

export default ChapterActions
