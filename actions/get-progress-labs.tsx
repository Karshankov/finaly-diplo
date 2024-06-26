import { db } from "@/lib/db";

export const getProgressLabs = async (
  userId: string,
  labsId: string
): Promise<number> => {
  try {
    const publishedChapters = await db.chapterLabs.findMany({
      where: {
        labsId: labsId,
        isPublished: true,
      },
      select: {
        id: true,
      },
    });

    const publishedChapterIds = publishedChapters.map((chapter) => chapter.id);
    const validCompletedChapters = await db.userProgressLabs.count({
      where: {
        userId: userId,
        chapterId: {
          in: publishedChapterIds,
        },
        isCompleted: true,
      },
    });
    const progressPercentage =
      (validCompletedChapters / publishedChapterIds.length) * 100;

    return progressPercentage;
  } catch (error) {
    console.log("Ошибка получения прогресса", error);
    return 0;
  }
};