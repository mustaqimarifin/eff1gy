     
    
    
    
 
    --params: ["trF8g",1]
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."status"::text, "t1"."hearts", "t1"."createdAt", "t1"."updatedAt", "t1"."title", "t1"."plays", "t1"."waveform", "t1"."audioUrl", "t1"."description", "t1"."answer", "t1"."userId", "t1"."count", JSONB_BUILD_OBJECT('comments', COALESCE("t2"."_aggr_count_comments", 0), 'reactions', COALESCE("t4"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Question" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_comments" FROM "public"."Comment" AS "t3" WHERE "t1"."id" = "t3"."questionId") AS "t2" ON true LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t5" WHERE "t1"."id" = "t5"."questionId") AS "t4" ON true WHERE ("t1"."id") IN (SELECT "t1"."questionId" FROM "public"."Comment" AS "t1" WHERE (1=1 AND "t1"."questionId" IS NOT NULL)) ORDER BY "t1"."updatedAt" DESC LIMIT $1 OFFSET $2 
    --params: [25,0]
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    -- Select Stack w ReactionCount
    SELECT "t1"."id", "t1"."createdAt", "t1"."updatedAt", "t1"."name", "t1"."slug", "t1"."description", "t1"."image", "t1"."url", "t1"."count", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Stack" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."stackId") AS "t2" ON true ORDER BY "t1"."name" ASC LIMIT $1 OFFSET $2 
    --params: [25,0]
    
    
    SELECT COUNT(*) FROM (SELECT "public"."Stack"."id" FROM "public"."Stack" WHERE 1=1 OFFSET $1) AS "sub" 
    --params: [0]
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."name" FROM "public"."Tag" AS "t1" ORDER BY "t1"."name" DESC 
    --params: []
    
    
    SELECT 1 
    --params: []
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."createdAt", "t1"."updatedAt", "t1"."url", "t1"."host", "t1"."title", "t1"."image", "t1"."description", "t1"."twitterHandle", "t1"."faviconUrl", "t1"."count", "Bookmark_tags_m2m"."__prisma_data__" AS "tags", JSONB_BUILD_OBJECT('reactions', COALESCE("t9"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Bookmark" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t3"."__prisma_data__" FROM "public"."_BookmarkToTag" AS "t2" LEFT JOIN LATERAL (SELECT JSONB_BUILD_OBJECT('name', "t6"."name") AS "__prisma_data__", "t6"."name" FROM (SELECT "t5".* FROM "public"."Tag" AS "t5" WHERE "t2"."B" = "t5"."name" /* root select */) AS "t6") AS "t3" ON true WHERE "t2"."A" = "t1"."id" /* inner */) AS "t4" /* outer */) AS "Bookmark_tags_m2m" ON true LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t10" WHERE "t1"."id" = "t10"."bookmarkId") AS "t9" ON true ORDER BY "t1"."createdAt" DESC LIMIT $1 OFFSET $2 
    --params: [25,0]
    
    
    SELECT COUNT(*) FROM (SELECT "public"."Bookmark"."id" FROM "public"."Bookmark" WHERE 1=1 OFFSET $1) AS "sub" 
    --params: [0]
    
    
 
    --params: ["stripe","2024-07-24 18:23:33.904 UTC",1,1,"stripe"]
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."slug", "t1"."title", "t1"."date", "t1"."userId", "t1"."count", "Blog_comments"."__prisma_data__" AS "comments", JSONB_BUILD_OBJECT('reactions', COALESCE("t6"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Blog" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'updatedAt', "t3"."updatedAt", 'text', "t3"."text", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'parentId', "t3"."parentId", 'blogId', "t3"."blogId", 'postId', "t3"."postId", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Comment" AS "t2" WHERE "t1"."id" = "t2"."blogId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Blog_comments" ON true LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t7" WHERE "t1"."id" = "t7"."blogId") AS "t6" ON true WHERE "t1"."slug" IN ($1,$2) 
    --params: ["stripe","stripe"]
    
    
    SELECT "t1"."id", "Blog_reactions"."__prisma_data__" AS "reactions" FROM "public"."Blog" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'postId', "t3"."postId", 'blogId', "t3"."blogId", 'slug', "t3"."slug", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Reaction" AS "t2" WHERE "t1"."id" = "t2"."blogId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Blog_reactions" ON true WHERE "t1"."id" IN ($1,$2) 
    --params: ["WbNdK","WbNdK"]
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "Blog_comments"."__prisma_data__" AS "comments" FROM "public"."Blog" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'updatedAt', "t3"."updatedAt", 'text', "t3"."text", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'parentId', "t3"."parentId", 'blogId', "t3"."blogId", 'postId', "t3"."postId", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Comment" AS "t2" WHERE "t1"."id" = "t2"."blogId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Blog_comments" ON true WHERE ("t1"."id" = $1 AND 1=1) LIMIT $2 
    --params: ["WbNdK",1]
    
    
    SELECT 1 
    --params: []
    
    
 
    --params: ["stripe","2024-07-24 18:26:30.818 UTC",1,1,"stripe"]
    
    
 
    --params: ["stripe","2024-07-24 18:27:17.065 UTC",1,1,"stripe"]
    
    
    SELECT 1 
    --params: []
    
    
 
    --params: ["stripe","2024-07-24 18:28:16.714 UTC",1,1,"stripe"]
    
    
    SELECT 1 
    --params: []
    
    
 
    --params: ["stripe","2024-07-24 18:28:44.056 UTC",1,1,"stripe"]
    
    
    SELECT 1 
    --params: []
    
    
 
    --params: ["stripe","2024-07-24 18:29:14.983 UTC",1,1,"stripe"]
    
    
    SELECT 1 
    --params: []
    
    
 
    --params: ["stripe","2024-07-24 18:29:39.180 UTC",1,1,"stripe"]
    
    
 
    --params: ["stripe","2024-07-24 18:29:41.221 UTC",1,1,"stripe"]
    
    
 
    --params: ["stripe","2024-07-24 18:29:45.647 UTC",1,1,"stripe"]
    
    
    SELECT 1 
    --params: []
    
    
 
    --params: ["stripe","2024-07-24 18:30:24.853 UTC",1,1,"stripe"]
    
    
 
    --params: ["stripe","2024-07-24 18:31:23.655 UTC",1,1,"stripe"]
    
    
    SELECT 1 
    --params: []
    
    
    SELECT 1 
    --params: []
    
    
 
    --params: ["stripe","2024-07-24 18:34:10.727 UTC",1,1,"stripe"]
    
    
    SELECT 1 
    --params: []
    
    
 
    --params: ["stripe","2024-07-24 18:34:32.857 UTC",1,1,"stripe"]
    
    
 
    --params: ["stripe","2024-07-24 18:34:37.768 UTC",1,1,"stripe"]
    
    
    SELECT 1 
    --params: []
    
    
 
    --params: ["stripe","2024-07-24 18:35:14.351 UTC",1,1,"stripe"]
    
    
    SELECT 1 
    --params: []
    
    
 
    --params: ["stripe","2024-07-24 18:36:32.507 UTC",1,1,"stripe"]
    
    
    SELECT 1 
    --params: []
    
    
 
    --params: ["stripe","2024-07-24 18:37:48.940 UTC",1,1,"stripe"]
    
    
    SELECT 1 
    --params: []
    
    
 
    --params: ["stripe","2024-07-24 18:38:53.867 UTC",1,1,"stripe"]
    
    
 
    --params: ["stripe","2024-07-24 18:39:00.729 UTC",1,1,"stripe"]
    
    
    SELECT 1 
    --params: []
    
    
 
    --params: ["stripe","2024-07-24 18:39:37.940 UTC",1,1,"stripe"]
    
    
 
    --params: ["stripe","2024-07-24 18:40:25.035 UTC",1,1,"stripe"]
    
    
 
    --params: ["stripe","2024-07-24 18:45:26.184 UTC",1,1,"stripe"]
    
    
 
    --params: ["stripe","2024-07-24 18:48:00.705 UTC",1,1,"stripe"]
    
    
 
    --params: ["stripe","2024-07-24 18:49:12.701 UTC",1,1,"stripe"]
    
    
 
    --params: ["stripe","2024-07-24 18:56:22.724 UTC",1,1,"stripe"]
    
    
 
    --params: ["nanoid-pg","2024-07-24 20:11:36.040 UTC",1,1,"nanoid-pg"]
    
    
    SELECT 1 
    --params: []
    
    
     INSERT INTO "public"."Blog" ("slug","date","count") VALUES ($1,$2,$3) ON CONFLICT ("slug") DO UPDATE SET "count" = ("public"."Blog"."count" + $4) WHERE ("public"."Blog"."slug" = $5 AND 1=1) RETURNING "public"."Blog"."id", "public"."Blog"."slug", "public"."Blog"."title", "public"."Blog"."date", "public"."Blog"."userId", "public"."Blog"."count"
    --params: ["stripe","2024-07-24 20:12:08.661 UTC",1,1,"stripe"]
    
    SELECT 1 
    --params: []
    
    
 
    --params: ["stripe","2024-07-24 20:14:18.500 UTC",1,1,"stripe"]
    
    
     
    
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."slug", "t1"."title", "t1"."date", "t1"."userId", "t1"."count", "Blog_comments"."__prisma_data__" AS "comments", JSONB_BUILD_OBJECT('reactions', COALESCE("t6"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Blog" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'updatedAt', "t3"."updatedAt", 'text', "t3"."text", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'parentId', "t3"."parentId", 'blogId', "t3"."blogId", 'postId', "t3"."postId", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Comment" AS "t2" WHERE "t1"."id" = "t2"."blogId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Blog_comments" ON true LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t7" WHERE "t1"."id" = "t7"."blogId") AS "t6" ON true WHERE "t1"."slug" IN ($1,$2) 
    --params: ["stripe","stripe"]
    
    
    SELECT "t1"."id", "Blog_reactions"."__prisma_data__" AS "reactions" FROM "public"."Blog" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'postId', "t3"."postId", 'blogId', "t3"."blogId", 'slug', "t3"."slug", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Reaction" AS "t2" WHERE "t1"."id" = "t2"."blogId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Blog_reactions" ON true WHERE "t1"."id" IN ($1,$2) 
    --params: ["WbNdK","WbNdK"]
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "Blog_comments"."__prisma_data__" AS "comments" FROM "public"."Blog" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'updatedAt', "t3"."updatedAt", 'text', "t3"."text", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'parentId', "t3"."parentId", 'blogId', "t3"."blogId", 'postId', "t3"."postId", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Comment" AS "t2" WHERE "t1"."id" = "t2"."blogId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Blog_comments" ON true WHERE ("t1"."id" = $1 AND 1=1) LIMIT $2 
    --params: ["WbNdK",1]
    
    
 
    --params: ["stripe","2024-07-24 20:14:30.171 UTC",1,1,"stripe"]
    
    
     
    
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."slug", "t1"."title", "t1"."date", "t1"."userId", "t1"."count", "Blog_comments"."__prisma_data__" AS "comments", JSONB_BUILD_OBJECT('reactions', COALESCE("t6"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Blog" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'updatedAt', "t3"."updatedAt", 'text', "t3"."text", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'parentId', "t3"."parentId", 'blogId', "t3"."blogId", 'postId', "t3"."postId", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Comment" AS "t2" WHERE "t1"."id" = "t2"."blogId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Blog_comments" ON true LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t7" WHERE "t1"."id" = "t7"."blogId") AS "t6" ON true WHERE "t1"."slug" IN ($1,$2) 
    --params: ["stripe","stripe"]
    
    
    SELECT "t1"."id", "Blog_reactions"."__prisma_data__" AS "reactions" FROM "public"."Blog" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'postId', "t3"."postId", 'blogId', "t3"."blogId", 'slug', "t3"."slug", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Reaction" AS "t2" WHERE "t1"."id" = "t2"."blogId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Blog_reactions" ON true WHERE "t1"."id" IN ($1,$2) 
    --params: ["WbNdK","WbNdK"]
    
    
 
    --params: ["trF8g",1]
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "Blog_comments"."__prisma_data__" AS "comments" FROM "public"."Blog" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'updatedAt', "t3"."updatedAt", 'text', "t3"."text", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'parentId', "t3"."parentId", 'blogId', "t3"."blogId", 'postId', "t3"."postId", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Comment" AS "t2" WHERE "t1"."id" = "t2"."blogId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Blog_comments" ON true WHERE ("t1"."id" = $1 AND 1=1) LIMIT $2 
    --params: ["WbNdK",1]
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."createdAt", "t1"."updatedAt", "t1"."name", "t1"."slug", "t1"."description", "t1"."image", "t1"."url", "t1"."count", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Stack" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."stackId") AS "t2" ON true ORDER BY "t1"."name" ASC LIMIT $1 OFFSET $2 
    --params: [25,0]
    
    
    SELECT COUNT(*) FROM (SELECT "public"."Stack"."id" FROM "public"."Stack" WHERE 1=1 OFFSET $1) AS "sub" 
    --params: [0]
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."name" FROM "public"."Tag" AS "t1" ORDER BY "t1"."name" DESC 
    --params: []
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NULL ORDER BY "t1"."createdAt" DESC 
    --params: []
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["",""]
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["",""]
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    -- Select Post w Reactions + Count
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    
    SELECT 1 
    --params: []
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["nanoid-pg","2024-07-24 20:39:22.026 UTC",1,1,"nanoid-pg"]
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."slug", "t1"."title", "t1"."date", "t1"."userId", "t1"."count", "Case_comments"."__prisma_data__" AS "comments", JSONB_BUILD_OBJECT('reactions', COALESCE("t6"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Case" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'updatedAt', "t3"."updatedAt", 'text', "t3"."text", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'parentId', "t3"."parentId", 'blogId', "t3"."blogId", 'postId', "t3"."postId", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Comment" AS "t2" WHERE "t1"."id" = "t2"."caseId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Case_comments" ON true LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t7" WHERE "t1"."id" = "t7"."caseId") AS "t6" ON true WHERE "t1"."slug" IN ($1,$2) 
    --params: ["nanoid-pg","nanoid-pg"]
    
    
    SELECT "t1"."id", "Case_reactions"."__prisma_data__" AS "reactions" FROM "public"."Case" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'postId', "t3"."postId", 'blogId', "t3"."blogId", 'slug', "t3"."slug", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Reaction" AS "t2" WHERE "t1"."id" = "t2"."caseId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Case_reactions" ON true WHERE "t1"."id" IN ($1,$2) 
    --params: ["ZnN81","ZnN81"]
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    --INSERT CASE COUNT
     INSERT INTO "public"."Case" ("slug","date","count") VALUES ($1,$2,$3) ON CONFLICT ("slug") DO UPDATE SET "count" = ("public"."Case"."count" + $4) WHERE ("public"."Case"."slug" = $5 AND 1=1) RETURNING "public"."Case"."id", "public"."Case"."slug", "public"."Case"."title", "public"."Case"."date", "public"."Case"."userId", "public"."Case"."count"
    --params: ["nanoid-pg","2024-07-24 20:39:37.496 UTC",1,1,"nanoid-pg"]
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
    SELECT 
    "t1"."id", 
    "t1"."slug", 
    "t1"."title", 
    "t1"."date", 
    "t1"."userId", 
    "t1"."count",
    "Case_comments"."__prisma_data__" AS "comments", 
    JSONB_BUILD_OBJECT('reactions', COALESCE("t6"."_aggr_count_reactions", 0)) AS "_count" 
    FROM "public"."Case" AS "t1" 
    LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" 
    FROM (SELECT "t4"."__prisma_data__" 
    FROM (SELECT JSONB_BUILD_OBJECT(
    'id', "t3"."id", 
    'createdAt', "t3"."createdAt", 
    'updatedAt', "t3"."updatedAt", 
    'text', "t3"."text", 
    'userId', "t3"."userId", 
    'bookmarkId', "t3"."bookmarkId", 
    'questionId', "t3"."questionId", 
    'stackId', "t3"."stackId", 
    'parentId', "t3"."parentId", 
    'blogId', "t3"."blogId", 
    'postId', "t3"."postId", 
    'eventId', "t3"."eventId", 
    'caseId', "t3"."caseId") AS "__prisma_data__" 
    FROM (
    SELECT "t2".* FROM "public"."Comment" AS "t2" WHERE "t1"."id" = "t2"."caseId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Case_comments" ON true LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t7" WHERE "t1"."id" = "t7"."caseId") AS "t6" ON true WHERE "t1"."slug" IN ($1,$2) 
    --params: ["nanoid-pg","nanoid-pg"]
    
    
    SELECT "t1"."id", "Case_reactions"."__prisma_data__" AS "reactions" FROM "public"."Case" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'postId', "t3"."postId", 'blogId', "t3"."blogId", 'slug', "t3"."slug", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Reaction" AS "t2" WHERE "t1"."id" = "t2"."caseId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Case_reactions" ON true WHERE "t1"."id" IN ($1,$2) 
    --params: ["ZnN81","ZnN81"]
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
    SELECT 1 
    --params: []
    
    
 
    --params: ["nanoid-pg","2024-07-24 20:40:12.605 UTC",1,1,"nanoid-pg"]
    
    
 
    --params: ["nanoid-pg","2024-07-24 20:40:17.732 UTC",1,1,"nanoid-pg"]
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."slug", "t1"."title", "t1"."date", "t1"."userId", "t1"."count", "Case_comments"."__prisma_data__" AS "comments", JSONB_BUILD_OBJECT('reactions', COALESCE("t6"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Case" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'updatedAt', "t3"."updatedAt", 'text', "t3"."text", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'parentId', "t3"."parentId", 'blogId', "t3"."blogId", 'postId', "t3"."postId", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Comment" AS "t2" WHERE "t1"."id" = "t2"."caseId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Case_comments" ON true LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t7" WHERE "t1"."id" = "t7"."caseId") AS "t6" ON true WHERE "t1"."slug" IN ($1,$2) 
    --params: ["nanoid-pg","nanoid-pg"]
    
    
    SELECT "t1"."id", "Case_reactions"."__prisma_data__" AS "reactions" FROM "public"."Case" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'postId', "t3"."postId", 'blogId', "t3"."blogId", 'slug', "t3"."slug", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Reaction" AS "t2" WHERE "t1"."id" = "t2"."caseId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Case_reactions" ON true WHERE "t1"."id" IN ($1,$2) 
    --params: ["ZnN81","ZnN81"]
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
    SELECT 1 
    --params: []
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["",""]
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NULL ORDER BY "t1"."createdAt" DESC 
    --params: []
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["",""]
    
    
    SELECT 1 
    --params: []
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
    BEGIN 
    --params: []
    
    
    SELECT "public"."User"."id" FROM "public"."User" WHERE ("public"."User"."id" = $1 AND 1=1) OFFSET $2 
    --params: ["trF8g",0]
    
    
    INSERT INTO "public"."Post" ("count","createdAt","updatedAt","slug","title","text","excerpt","userId") VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING "public"."Post"."id" 
    --params: [1,"2024-07-24 21:11:20.071 UTC","2024-07-24 21:11:20.071 UTC","dingdangdong","DINGDANGDONG","suckmacallit","","trF8g"]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId" FROM "public"."Post" AS "t1" WHERE "t1"."id" = $1 LIMIT $2 
    --params: ["ptI0J",1]
    
    
    COMMIT 
    --params: []
    
    

    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["dingdangdong","dingdangdong"]
    
    

    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["dingdangdong","dingdangdong"]
    
    

    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["dingdangdong","dingdangdong"]
    
    

    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NULL ORDER BY "t1"."createdAt" DESC 
    --params: []
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId" FROM "public"."Post" AS "t1" WHERE ("t1"."slug" = $1 AND 1=1) LIMIT $2 
    --params: ["dingdangdong",1]
    
    
    UPDATE "public"."Post" SET "title" = $1, "text" = $2, "slug" = $3, "excerpt" = $4, "publishedAt" = $5, "updatedAt" = $6 WHERE ("public"."Post"."id" = $7 AND 1=1) RETURNING "public"."Post"."id", "public"."Post"."count", "public"."Post"."createdAt", "public"."Post"."updatedAt", "public"."Post"."publishedAt", "public"."Post"."slug", "public"."Post"."title", "public"."Post"."text", "public"."Post"."excerpt", "public"."Post"."featureImage", "public"."Post"."userId" 
    --params: ["DINGDANGDONG","suckmacallit","dingdangdong","","2024-07-24 21:12:39.908 UTC","2024-07-24 21:12:39.909 UTC","ptI0J"]
    
    

    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "Post_comments"."__prisma_data__" AS "comments" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'updatedAt', "t3"."updatedAt", 'text', "t3"."text", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'parentId', "t3"."parentId", 'blogId', "t3"."blogId", 'postId', "t3"."postId", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Comment" AS "t2" WHERE "t1"."id" = "t2"."postId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Post_comments" ON true WHERE ("t1"."id" = $1 AND 1=1) LIMIT $2 
    --params: ["ptI0J",1]
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."createdAt", "t1"."userId", "t1"."bookmarkId", "t1"."questionId", "t1"."stackId", "t1"."postId", "t1"."blogId", "t1"."slug", "t1"."eventId", "t1"."caseId" FROM "public"."Reaction" AS "t1" WHERE ("t1"."postId" = $1 AND "t1"."userId" = $2) 
    --params: ["ptI0J","trF8g"]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId" FROM "public"."Post" AS "t1" WHERE ("t1"."id" = $1 AND 1=1) LIMIT $2 
    --params: ["ptI0J",1]
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["dingdangdong","dingdangdong"]
    
    

    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "Post_comments"."__prisma_data__" AS "comments" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'updatedAt', "t3"."updatedAt", 'text', "t3"."text", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'parentId', "t3"."parentId", 'blogId', "t3"."blogId", 'postId', "t3"."postId", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Comment" AS "t2" WHERE "t1"."id" = "t2"."postId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Post_comments" ON true WHERE ("t1"."id" = $1 AND 1=1) LIMIT $2 
    --params: ["ptI0J",1]
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    
     
    
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["dingdangdong","dingdangdong"]
    
    

    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "Post_comments"."__prisma_data__" AS "comments" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'updatedAt', "t3"."updatedAt", 'text', "t3"."text", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'parentId', "t3"."parentId", 'blogId', "t3"."blogId", 'postId', "t3"."postId", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Comment" AS "t2" WHERE "t1"."id" = "t2"."postId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Post_comments" ON true WHERE ("t1"."id" = $1 AND 1=1) LIMIT $2 
    --params: ["ptI0J",1]
    
    
    SELECT 1 
    --params: []
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."createdAt", "t1"."updatedAt", "t1"."name", "t1"."slug", "t1"."description", "t1"."image", "t1"."url", "t1"."count", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Stack" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."stackId") AS "t2" ON true ORDER BY "t1"."name" ASC LIMIT $1 OFFSET $2 
    --params: [25,0]
    
    
    SELECT COUNT(*) FROM (SELECT "public"."Stack"."id" FROM "public"."Stack" WHERE 1=1 OFFSET $1) AS "sub" 
    --params: [0]
    
    
     
    
    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."name" FROM "public"."Tag" AS "t1" ORDER BY "t1"."name" DESC 
    --params: []
    
    


    
    
 
    --params: ["trF8g",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["dingdangdong","dingdangdong"]
    
    

    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "Post_comments"."__prisma_data__" AS "comments" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'updatedAt', "t3"."updatedAt", 'text', "t3"."text", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'parentId', "t3"."parentId", 'blogId', "t3"."blogId", 'postId', "t3"."postId", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Comment" AS "t2" WHERE "t1"."id" = "t2"."postId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Post_comments" ON true WHERE ("t1"."id" = $1 AND 1=1) LIMIT $2 
    --params: ["ptI0J",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    
    SELECT 1 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."name" FROM "public"."Tag" AS "t1" ORDER BY "t1"."name" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."createdAt", "t1"."updatedAt", "t1"."url", "t1"."host", "t1"."title", "t1"."image", "t1"."description", "t1"."twitterHandle", "t1"."faviconUrl", "t1"."count", "Bookmark_tags_m2m"."__prisma_data__" AS "tags", JSONB_BUILD_OBJECT('reactions', COALESCE("t9"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Bookmark" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t3"."__prisma_data__" FROM "public"."_BookmarkToTag" AS "t2" LEFT JOIN LATERAL (SELECT JSONB_BUILD_OBJECT('name', "t6"."name") AS "__prisma_data__", "t6"."name" FROM (SELECT "t5".* FROM "public"."Tag" AS "t5" WHERE "t2"."B" = "t5"."name" /* root select */) AS "t6") AS "t3" ON true WHERE "t2"."A" = "t1"."id" /* inner */) AS "t4" /* outer */) AS "Bookmark_tags_m2m" ON true LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t10" WHERE "t1"."id" = "t10"."bookmarkId") AS "t9" ON true ORDER BY "t1"."createdAt" DESC LIMIT $1 OFFSET $2 
    --params: [25,0]
    
    
    SELECT COUNT(*) FROM (SELECT "public"."Bookmark"."id" FROM "public"."Bookmark" WHERE 1=1 OFFSET $1) AS "sub" 
    --params: [0]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["dingdangdong","dingdangdong"]
    
    

    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "Post_comments"."__prisma_data__" AS "comments" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'updatedAt', "t3"."updatedAt", 'text', "t3"."text", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'parentId', "t3"."parentId", 'blogId', "t3"."blogId", 'postId', "t3"."postId", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Comment" AS "t2" WHERE "t1"."id" = "t2"."postId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Post_comments" ON true WHERE ("t1"."id" = $1 AND 1=1) LIMIT $2 
    --params: ["ptI0J",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NULL ORDER BY "t1"."createdAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["",""]
    
    

    
    
 
    --params: ["trF8g",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["",""]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NULL ORDER BY "t1"."createdAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["",""]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["dingdangdong","dingdangdong"]
    
    

    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "Post_comments"."__prisma_data__" AS "comments" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'updatedAt', "t3"."updatedAt", 'text', "t3"."text", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'parentId', "t3"."parentId", 'blogId', "t3"."blogId", 'postId', "t3"."postId", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Comment" AS "t2" WHERE "t1"."id" = "t2"."postId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Post_comments" ON true WHERE ("t1"."id" = $1 AND 1=1) LIMIT $2 
    --params: ["ptI0J",1]
    
    
 
    --params: ["stripe","2024-07-24 23:54:42.907 UTC",1,1,"stripe"]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."slug", "t1"."title", "t1"."date", "t1"."userId", "t1"."count", "Blog_comments"."__prisma_data__" AS "comments", JSONB_BUILD_OBJECT('reactions', COALESCE("t6"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Blog" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'updatedAt', "t3"."updatedAt", 'text', "t3"."text", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'parentId', "t3"."parentId", 'blogId', "t3"."blogId", 'postId', "t3"."postId", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Comment" AS "t2" WHERE "t1"."id" = "t2"."blogId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Blog_comments" ON true LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t7" WHERE "t1"."id" = "t7"."blogId") AS "t6" ON true WHERE "t1"."slug" IN ($1,$2) 
    --params: ["stripe","stripe"]
    
    
    SELECT "t1"."id", "Blog_reactions"."__prisma_data__" AS "reactions" FROM "public"."Blog" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'postId', "t3"."postId", 'blogId', "t3"."blogId", 'slug', "t3"."slug", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Reaction" AS "t2" WHERE "t1"."id" = "t2"."blogId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Blog_reactions" ON true WHERE "t1"."id" IN ($1,$2) 
    --params: ["WbNdK","WbNdK"]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "Blog_comments"."__prisma_data__" AS "comments" FROM "public"."Blog" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'updatedAt', "t3"."updatedAt", 'text', "t3"."text", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'parentId', "t3"."parentId", 'blogId', "t3"."blogId", 'postId', "t3"."postId", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Comment" AS "t2" WHERE "t1"."id" = "t2"."blogId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Blog_comments" ON true WHERE ("t1"."id" = $1 AND 1=1) LIMIT $2 
    --params: ["WbNdK",1]
    
    
    SELECT 1 
    --params: []
    
    
""
    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["dingdangdong","dingdangdong"]
    
    

    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "Post_comments"."__prisma_data__" AS "comments" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'updatedAt', "t3"."updatedAt", 'text', "t3"."text", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'parentId', "t3"."parentId", 'blogId', "t3"."blogId", 'postId', "t3"."postId", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Comment" AS "t2" WHERE "t1"."id" = "t2"."postId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Post_comments" ON true WHERE ("t1"."id" = $1 AND 1=1) LIMIT $2 
    --params: ["ptI0J",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NULL ORDER BY "t1"."createdAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["dingdangdong","dingdangdong"]
    
    

    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "Post_comments"."__prisma_data__" AS "comments" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'updatedAt', "t3"."updatedAt", 'text', "t3"."text", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'parentId', "t3"."parentId", 'blogId', "t3"."blogId", 'postId', "t3"."postId", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Comment" AS "t2" WHERE "t1"."id" = "t2"."postId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Post_comments" ON true WHERE ("t1"."id" = $1 AND 1=1) LIMIT $2 
    --params: ["ptI0J",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId" FROM "public"."Post" AS "t1" WHERE ("t1"."id" = $1 AND 1=1) LIMIT $2 
    --params: ["ptI0J",1]
    
    
    INSERT INTO "public"."Comment" ("createdAt","updatedAt","text","userId","postId") VALUES ($1,$2,$3,$4,$5) RETURNING "public"."Comment"."id", "public"."Comment"."createdAt", "public"."Comment"."updatedAt", "public"."Comment"."text", "public"."Comment"."userId", "public"."Comment"."bookmarkId", "public"."Comment"."questionId", "public"."Comment"."stackId", "public"."Comment"."parentId", "public"."Comment"."blogId", "public"."Comment"."postId", "public"."Comment"."eventId", "public"."Comment"."caseId" 
    --params: ["2024-07-25 00:00:21.195 UTC","2024-07-25 00:00:21.195 UTC","lola","trF8g","ptI0J"]
    
    
 
    --params: [1,"MAn9A",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    

    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["dingdangdong","dingdangdong"]
    
    

    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "Post_comments"."__prisma_data__" AS "comments" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'updatedAt', "t3"."updatedAt", 'text', "t3"."text", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'parentId', "t3"."parentId", 'blogId', "t3"."blogId", 'postId', "t3"."postId", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Comment" AS "t2" WHERE "t1"."id" = "t2"."postId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Post_comments" ON true WHERE ("t1"."id" = $1 AND 1=1) LIMIT $2 
    --params: ["ptI0J",1]
    
    
 
    --params: [1,"MAn9A",1]
    
    
    SELECT 1 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."name" FROM "public"."Tag" AS "t1" ORDER BY "t1"."name" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."createdAt", "t1"."updatedAt", "t1"."url", "t1"."host", "t1"."title", "t1"."image", "t1"."description", "t1"."twitterHandle", "t1"."faviconUrl", "t1"."count", "Bookmark_tags_m2m"."__prisma_data__" AS "tags", JSONB_BUILD_OBJECT('reactions', COALESCE("t9"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Bookmark" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t3"."__prisma_data__" FROM "public"."_BookmarkToTag" AS "t2" LEFT JOIN LATERAL (SELECT JSONB_BUILD_OBJECT('name', "t6"."name") AS "__prisma_data__", "t6"."name" FROM (SELECT "t5".* FROM "public"."Tag" AS "t5" WHERE "t2"."B" = "t5"."name" /* root select */) AS "t6") AS "t3" ON true WHERE "t2"."A" = "t1"."id" /* inner */) AS "t4" /* outer */) AS "Bookmark_tags_m2m" ON true LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t10" WHERE "t1"."id" = "t10"."bookmarkId") AS "t9" ON true ORDER BY "t1"."createdAt" DESC LIMIT $1 OFFSET $2 
    --params: [25,0]
    
    
    SELECT COUNT(*) FROM (SELECT "public"."Bookmark"."id" FROM "public"."Bookmark" WHERE 1=1 OFFSET $1) AS "sub" 
    --params: [0]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."createdAt", "t1"."updatedAt", "t1"."name", "t1"."slug", "t1"."description", "t1"."image", "t1"."url", "t1"."count", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Stack" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."stackId") AS "t2" ON true ORDER BY "t1"."name" ASC LIMIT $1 OFFSET $2 
    --params: [25,0]
    
    
    SELECT COUNT(*) FROM (SELECT "public"."Stack"."id" FROM "public"."Stack" WHERE 1=1 OFFSET $1) AS "sub" 
    --params: [0]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."createdAt", "t1"."updatedAt", "t1"."name", "t1"."slug", "t1"."description", "t1"."image", "t1"."url", "t1"."count", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Stack" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."stackId") AS "t2" ON true ORDER BY "t1"."name" ASC LIMIT $1 OFFSET $2 
    --params: [25,0]
    
    
    SELECT COUNT(*) FROM (SELECT "public"."Stack"."id" FROM "public"."Stack" WHERE 1=1 OFFSET $1) AS "sub" 
    --params: [0]
    
    

    
    
 
    --params: ["trF8g",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."name" FROM "public"."Tag" AS "t1" ORDER BY "t1"."name" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["dingdangdong","dingdangdong"]
    
    

    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "Post_comments"."__prisma_data__" AS "comments" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'updatedAt', "t3"."updatedAt", 'text', "t3"."text", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'parentId', "t3"."parentId", 'blogId', "t3"."blogId", 'postId', "t3"."postId", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Comment" AS "t2" WHERE "t1"."id" = "t2"."postId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Post_comments" ON true WHERE ("t1"."id" = $1 AND 1=1) LIMIT $2 
    --params: ["ptI0J",1]
    
    
 
    --params: [1,"MAn9A",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["dingdangdong","dingdangdong"]
    
    

    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "Post_comments"."__prisma_data__" AS "comments" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'updatedAt', "t3"."updatedAt", 'text', "t3"."text", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'parentId', "t3"."parentId", 'blogId', "t3"."blogId", 'postId', "t3"."postId", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Comment" AS "t2" WHERE "t1"."id" = "t2"."postId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Post_comments" ON true WHERE ("t1"."id" = $1 AND 1=1) LIMIT $2 
    --params: ["ptI0J",1]
    
    
 
    --params: [1,"MAn9A",1]
    
    
    SELECT 1 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    

    
    

    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    
 
    --params: ["dingdangdong","dingdangdong"]
    
    

    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "Post_comments"."__prisma_data__" AS "comments" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'updatedAt', "t3"."updatedAt", 'text', "t3"."text", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'parentId', "t3"."parentId", 'blogId', "t3"."blogId", 'postId', "t3"."postId", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Comment" AS "t2" WHERE "t1"."id" = "t2"."postId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Post_comments" ON true WHERE ("t1"."id" = $1 AND 1=1) LIMIT $2 
    --params: ["ptI0J",1]
    
    
 
    --params: [1,"MAn9A",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["dingdangdong","dingdangdong"]
    
    

    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "Post_comments"."__prisma_data__" AS "comments" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'updatedAt', "t3"."updatedAt", 'text', "t3"."text", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'parentId', "t3"."parentId", 'blogId', "t3"."blogId", 'postId', "t3"."postId", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Comment" AS "t2" WHERE "t1"."id" = "t2"."postId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Post_comments" ON true WHERE ("t1"."id" = $1 AND 1=1) LIMIT $2 
    --params: ["ptI0J",1]
    
    
 
    --params: [1,"MAn9A",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    

    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["dingdangdong","dingdangdong"]
    
    

    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "Post_comments"."__prisma_data__" AS "comments" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'updatedAt', "t3"."updatedAt", 'text', "t3"."text", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'parentId', "t3"."parentId", 'blogId', "t3"."blogId", 'postId', "t3"."postId", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Comment" AS "t2" WHERE "t1"."id" = "t2"."postId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Post_comments" ON true WHERE ("t1"."id" = $1 AND 1=1) LIMIT $2 
    --params: ["ptI0J",1]
    
    
 
    --params: [1,"MAn9A",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    

    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["dingdangdong","dingdangdong"]
    
    

    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "Post_comments"."__prisma_data__" AS "comments" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'updatedAt', "t3"."updatedAt", 'text', "t3"."text", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'parentId', "t3"."parentId", 'blogId', "t3"."blogId", 'postId', "t3"."postId", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Comment" AS "t2" WHERE "t1"."id" = "t2"."postId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Post_comments" ON true WHERE ("t1"."id" = $1 AND 1=1) LIMIT $2 
    --params: ["ptI0J",1]
    
    
 
    --params: [1,"MAn9A",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["dingdangdong","dingdangdong"]
    
    

    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "Post_comments"."__prisma_data__" AS "comments" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'updatedAt', "t3"."updatedAt", 'text', "t3"."text", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'parentId', "t3"."parentId", 'blogId', "t3"."blogId", 'postId', "t3"."postId", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Comment" AS "t2" WHERE "t1"."id" = "t2"."postId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Post_comments" ON true WHERE ("t1"."id" = $1 AND 1=1) LIMIT $2 
    --params: ["ptI0J",1]
    
    
 
    --params: [1,"MAn9A",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    

    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["dingdangdong","dingdangdong"]
    
    

    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "Post_comments"."__prisma_data__" AS "comments" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'updatedAt', "t3"."updatedAt", 'text', "t3"."text", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'parentId', "t3"."parentId", 'blogId', "t3"."blogId", 'postId', "t3"."postId", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Comment" AS "t2" WHERE "t1"."id" = "t2"."postId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Post_comments" ON true WHERE ("t1"."id" = $1 AND 1=1) LIMIT $2 
    --params: ["ptI0J",1]
    
    
 
    --params: [1,"MAn9A",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    

    
    

    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["dingdangdong","dingdangdong"]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "Post_comments"."__prisma_data__" AS "comments" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'updatedAt', "t3"."updatedAt", 'text', "t3"."text", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'parentId', "t3"."parentId", 'blogId', "t3"."blogId", 'postId', "t3"."postId", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Comment" AS "t2" WHERE "t1"."id" = "t2"."postId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Post_comments" ON true WHERE ("t1"."id" = $1 AND 1=1) LIMIT $2 
    --params: ["ptI0J",1]
    
    
 
    --params: [1,"MAn9A",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."createdAt", "t1"."userId", "t1"."bookmarkId", "t1"."questionId", "t1"."stackId", "t1"."postId", "t1"."blogId", "t1"."slug", "t1"."eventId", "t1"."caseId" FROM "public"."Reaction" AS "t1" WHERE ("t1"."postId" = $1 AND "t1"."userId" = $2) 
    --params: ["ptI0J","trF8g"]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId" FROM "public"."Post" AS "t1" WHERE ("t1"."id" = $1 AND 1=1) LIMIT $2 
    --params: ["ptI0J",1]
    
    
    SELECT 1 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    
    SELECT 1 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NULL ORDER BY "t1"."createdAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NULL ORDER BY "t1"."createdAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["",""]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    
    SELECT 1 
    --params: []
    
    

    
    
    SELECT 1 
    --params: []
    
    
 
    --params: ["trF8g",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."name" FROM "public"."Tag" AS "t1" ORDER BY "t1"."name" DESC 
    --params: []
    
    
    SELECT "t1"."id", "t1"."createdAt", "t1"."updatedAt", "t1"."url", "t1"."host", "t1"."title", "t1"."image", "t1"."description", "t1"."twitterHandle", "t1"."faviconUrl", "t1"."count", "Bookmark_tags_m2m"."__prisma_data__" AS "tags", JSONB_BUILD_OBJECT('reactions', COALESCE("t9"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Bookmark" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t3"."__prisma_data__" FROM "public"."_BookmarkToTag" AS "t2" LEFT JOIN LATERAL (SELECT JSONB_BUILD_OBJECT('name', "t6"."name") AS "__prisma_data__", "t6"."name" FROM (SELECT "t5".* FROM "public"."Tag" AS "t5" WHERE "t2"."B" = "t5"."name" /* root select */) AS "t6") AS "t3" ON true WHERE "t2"."A" = "t1"."id" /* inner */) AS "t4" /* outer */) AS "Bookmark_tags_m2m" ON true LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t10" WHERE "t1"."id" = "t10"."bookmarkId") AS "t9" ON true ORDER BY "t1"."createdAt" DESC LIMIT $1 OFFSET $2 
    --params: [25,0]
    
    
    SELECT COUNT(*) FROM (SELECT "public"."Bookmark"."id" FROM "public"."Bookmark" WHERE 1=1 OFFSET $1) AS "sub" 
    --params: [0]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NULL ORDER BY "t1"."createdAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    
    SELECT 1 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    
    SELECT 1 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["",""]
    
    

    
    
 
    --params: ["trF8g",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["",""]
    
    

    
    
 
    --params: ["trF8g",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["",""]
    
    

    
    
 
    --params: ["trF8g",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["",""]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["dingdangdong","dingdangdong"]
    
    

    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "Post_comments"."__prisma_data__" AS "comments" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'updatedAt', "t3"."updatedAt", 'text', "t3"."text", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'parentId', "t3"."parentId", 'blogId', "t3"."blogId", 'postId', "t3"."postId", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Comment" AS "t2" WHERE "t1"."id" = "t2"."postId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Post_comments" ON true WHERE ("t1"."id" = $1 AND 1=1) LIMIT $2 
    --params: ["ptI0J",1]
    
    
 
    --params: [1,"MAn9A",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    
    SELECT 1 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["dingdangdong","dingdangdong"]
    
    

    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "Post_comments"."__prisma_data__" AS "comments" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'updatedAt', "t3"."updatedAt", 'text', "t3"."text", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'parentId', "t3"."parentId", 'blogId', "t3"."blogId", 'postId', "t3"."postId", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Comment" AS "t2" WHERE "t1"."id" = "t2"."postId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Post_comments" ON true WHERE ("t1"."id" = $1 AND 1=1) LIMIT $2 
    --params: ["ptI0J",1]
    
    
 
    --params: [1,"MAn9A",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    

    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["dingdangdong","dingdangdong"]
    
    

    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "Post_comments"."__prisma_data__" AS "comments" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'updatedAt', "t3"."updatedAt", 'text', "t3"."text", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'parentId', "t3"."parentId", 'blogId', "t3"."blogId", 'postId', "t3"."postId", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Comment" AS "t2" WHERE "t1"."id" = "t2"."postId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Post_comments" ON true WHERE ("t1"."id" = $1 AND 1=1) LIMIT $2 
    --params: ["ptI0J",1]
    
    
 
    --params: [1,"MAn9A",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NULL ORDER BY "t1"."createdAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NULL ORDER BY "t1"."createdAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NULL ORDER BY "t1"."createdAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NULL ORDER BY "t1"."createdAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["dingdangdong","dingdangdong"]
    
    

    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "Post_comments"."__prisma_data__" AS "comments" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'updatedAt', "t3"."updatedAt", 'text', "t3"."text", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'parentId', "t3"."parentId", 'blogId', "t3"."blogId", 'postId', "t3"."postId", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Comment" AS "t2" WHERE "t1"."id" = "t2"."postId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Post_comments" ON true WHERE ("t1"."id" = $1 AND 1=1) LIMIT $2 
    --params: ["ptI0J",1]
    
    
 
    --params: [1,"MAn9A",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NULL ORDER BY "t1"."createdAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["dingdangdong","dingdangdong"]
    
    

    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "Post_comments"."__prisma_data__" AS "comments" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'updatedAt', "t3"."updatedAt", 'text', "t3"."text", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'parentId', "t3"."parentId", 'blogId', "t3"."blogId", 'postId', "t3"."postId", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Comment" AS "t2" WHERE "t1"."id" = "t2"."postId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Post_comments" ON true WHERE ("t1"."id" = $1 AND 1=1) LIMIT $2 
    --params: ["ptI0J",1]
    
    
 
    --params: [1,"MAn9A",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NULL ORDER BY "t1"."createdAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NULL ORDER BY "t1"."createdAt" DESC 
    --params: []
    
    
    SELECT 1 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NULL ORDER BY "t1"."createdAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["",""]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NULL ORDER BY "t1"."createdAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    
    SELECT 1 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NULL ORDER BY "t1"."createdAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["dingdangdong","dingdangdong"]
    
    

    
    

    
    

    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "Post_comments"."__prisma_data__" AS "comments" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'updatedAt', "t3"."updatedAt", 'text', "t3"."text", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'parentId', "t3"."parentId", 'blogId', "t3"."blogId", 'postId', "t3"."postId", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Comment" AS "t2" WHERE "t1"."id" = "t2"."postId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Post_comments" ON true WHERE ("t1"."id" = $1 AND 1=1) LIMIT $2 
    --params: ["ptI0J",1]
    
    
 
    --params: [1,"MAn9A",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    

    
    

    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["dingdangdong","dingdangdong"]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "Post_comments"."__prisma_data__" AS "comments" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'updatedAt', "t3"."updatedAt", 'text', "t3"."text", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'parentId', "t3"."parentId", 'blogId', "t3"."blogId", 'postId', "t3"."postId", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Comment" AS "t2" WHERE "t1"."id" = "t2"."postId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Post_comments" ON true WHERE ("t1"."id" = $1 AND 1=1) LIMIT $2 
    --params: ["ptI0J",1]
    
    
 
    --params: [1,"MAn9A",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NULL ORDER BY "t1"."createdAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NULL ORDER BY "t1"."createdAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    

    
    

    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    
 
    --params: ["dingdangdong","dingdangdong"]
    
    

    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "Post_comments"."__prisma_data__" AS "comments" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'updatedAt', "t3"."updatedAt", 'text', "t3"."text", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'parentId', "t3"."parentId", 'blogId', "t3"."blogId", 'postId', "t3"."postId", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Comment" AS "t2" WHERE "t1"."id" = "t2"."postId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Post_comments" ON true WHERE ("t1"."id" = $1 AND 1=1) LIMIT $2 
    --params: ["ptI0J",1]
    
    
 
    --params: [1,"MAn9A",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    

    
    

    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["dingdangdong","dingdangdong"]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "Post_comments"."__prisma_data__" AS "comments" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'updatedAt', "t3"."updatedAt", 'text', "t3"."text", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'parentId', "t3"."parentId", 'blogId', "t3"."blogId", 'postId', "t3"."postId", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Comment" AS "t2" WHERE "t1"."id" = "t2"."postId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Post_comments" ON true WHERE ("t1"."id" = $1 AND 1=1) LIMIT $2 
    --params: ["ptI0J",1]
    
    
 
    --params: [1,"MAn9A",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NULL ORDER BY "t1"."createdAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NULL ORDER BY "t1"."createdAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["",""]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NULL ORDER BY "t1"."createdAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    

    
    

    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    
 
    --params: ["dingdangdong","dingdangdong"]
    
    

    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "Post_comments"."__prisma_data__" AS "comments" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'updatedAt', "t3"."updatedAt", 'text', "t3"."text", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'parentId', "t3"."parentId", 'blogId', "t3"."blogId", 'postId', "t3"."postId", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Comment" AS "t2" WHERE "t1"."id" = "t2"."postId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Post_comments" ON true WHERE ("t1"."id" = $1 AND 1=1) LIMIT $2 
    --params: ["ptI0J",1]
    
    
 
    --params: [1,"MAn9A",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    

    
    

    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    
 
    --params: ["dingdangdong","dingdangdong"]
    
    

    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "Post_comments"."__prisma_data__" AS "comments" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'updatedAt', "t3"."updatedAt", 'text', "t3"."text", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'parentId', "t3"."parentId", 'blogId', "t3"."blogId", 'postId', "t3"."postId", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Comment" AS "t2" WHERE "t1"."id" = "t2"."postId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Post_comments" ON true WHERE ("t1"."id" = $1 AND 1=1) LIMIT $2 
    --params: ["ptI0J",1]
    
    
 
    --params: [1,"MAn9A",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NULL ORDER BY "t1"."createdAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NULL ORDER BY "t1"."createdAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    

    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["dingdangdong","dingdangdong"]
    
    

    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "Post_comments"."__prisma_data__" AS "comments" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'updatedAt', "t3"."updatedAt", 'text', "t3"."text", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'parentId', "t3"."parentId", 'blogId', "t3"."blogId", 'postId', "t3"."postId", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Comment" AS "t2" WHERE "t1"."id" = "t2"."postId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Post_comments" ON true WHERE ("t1"."id" = $1 AND 1=1) LIMIT $2 
    --params: ["ptI0J",1]
    
    
 
    --params: [1,"MAn9A",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    

    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["dingdangdong","dingdangdong"]
    
    

    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "Post_comments"."__prisma_data__" AS "comments" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'updatedAt', "t3"."updatedAt", 'text', "t3"."text", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'parentId', "t3"."parentId", 'blogId', "t3"."blogId", 'postId', "t3"."postId", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Comment" AS "t2" WHERE "t1"."id" = "t2"."postId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Post_comments" ON true WHERE ("t1"."id" = $1 AND 1=1) LIMIT $2 
    --params: ["ptI0J",1]
    
    
 
    --params: [1,"MAn9A",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NULL ORDER BY "t1"."createdAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NULL ORDER BY "t1"."createdAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["",""]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NULL ORDER BY "t1"."createdAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."createdAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NULL ORDER BY "t1"."createdAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["dingdangdong","dingdangdong"]
    
    

    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "Post_comments"."__prisma_data__" AS "comments" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'updatedAt', "t3"."updatedAt", 'text', "t3"."text", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'parentId', "t3"."parentId", 'blogId', "t3"."blogId", 'postId', "t3"."postId", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Comment" AS "t2" WHERE "t1"."id" = "t2"."postId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Post_comments" ON true WHERE ("t1"."id" = $1 AND 1=1) LIMIT $2 
    --params: ["ptI0J",1]
    
    
 
    --params: [1,"MAn9A",1]
    
    
    SELECT 1 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["dingdangdong","dingdangdong"]
    
    

    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "Post_comments"."__prisma_data__" AS "comments" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'updatedAt', "t3"."updatedAt", 'text', "t3"."text", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'parentId', "t3"."parentId", 'blogId', "t3"."blogId", 'postId', "t3"."postId", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Comment" AS "t2" WHERE "t1"."id" = "t2"."postId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Post_comments" ON true WHERE ("t1"."id" = $1 AND 1=1) LIMIT $2 
    --params: ["ptI0J",1]
    
    
 
    --params: [1,"MAn9A",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["dingdangdong","dingdangdong"]
    
    

    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "Post_comments"."__prisma_data__" AS "comments" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'updatedAt', "t3"."updatedAt", 'text', "t3"."text", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'parentId', "t3"."parentId", 'blogId', "t3"."blogId", 'postId', "t3"."postId", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Comment" AS "t2" WHERE "t1"."id" = "t2"."postId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Post_comments" ON true WHERE ("t1"."id" = $1 AND 1=1) LIMIT $2 
    --params: ["ptI0J",1]
    
    
 
    --params: [1,"MAn9A",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    
 
    --params: ["dingdangdong","dingdangdong"]
    
    
    SELECT "t1"."id", "Post_reactions"."__prisma_data__" AS "reactions" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'postId', "t3"."postId", 'blogId', "t3"."blogId", 'slug', "t3"."slug", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Reaction" AS "t2" WHERE "t1"."id" = "t2"."postId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Post_reactions" ON true WHERE ("t1"."id" = $1 AND 1=1) LIMIT $2 
    --params: ["ptI0J",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["dingdangdong","dingdangdong"]
    
    

    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "Post_comments"."__prisma_data__" AS "comments" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'updatedAt', "t3"."updatedAt", 'text', "t3"."text", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'parentId', "t3"."parentId", 'blogId', "t3"."blogId", 'postId', "t3"."postId", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Comment" AS "t2" WHERE "t1"."id" = "t2"."postId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Post_comments" ON true WHERE ("t1"."id" = $1 AND 1=1) LIMIT $2 
    --params: ["ptI0J",1]
    
    
 
    --params: [1,"MAn9A",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NULL ORDER BY "t1"."createdAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    

    
    

    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    
 
    --params: ["dingdangdong","dingdangdong"]
    
    

    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "Post_comments"."__prisma_data__" AS "comments" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'updatedAt', "t3"."updatedAt", 'text', "t3"."text", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'parentId', "t3"."parentId", 'blogId', "t3"."blogId", 'postId', "t3"."postId", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Comment" AS "t2" WHERE "t1"."id" = "t2"."postId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Post_comments" ON true WHERE ("t1"."id" = $1 AND 1=1) LIMIT $2 
    --params: ["ptI0J",1]
    
    
 
    --params: [1,"MAn9A",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NULL ORDER BY "t1"."createdAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["",""]
    
    
    SELECT 1 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    BEGIN 
    --params: []
    
    
    SELECT "public"."User"."id" FROM "public"."User" WHERE ("public"."User"."id" = $1 AND 1=1) OFFSET $2 
    --params: ["trF8g",0]
    
    
    INSERT INTO "public"."Post" ("count","createdAt","updatedAt","slug","title","text","excerpt","userId") VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING "public"."Post"."id" 
    --params: [1,"2024-07-25 06:23:46.109 UTC","2024-07-25 06:23:46.109 UTC","yes-maam","YES MAAM","
In Swift, the `Codable` protocol is a type alias for the  protocols:

```swift
// Declaration
typealias Codable = Decodable & Encodable
```

The `Codable` protocol allows developers to encode or decode instances of a type to and from variety formats, such as a JSON or property lists.

## Basic Usage

To use the `Codable` protocol, you need to define the types that you want to encode or decode, and make them conform the `Codable` protocol:

```swift
struct User: Codable {
    var name: String
    var age: Int
}
```

The above code is defining a struct called `User` which conforms to the `Codable` protocol, which means that it can be encoded or decoded into a different formats.

The `User` struct has two properties:

- A `name` of type `String`
- An `age` of type `Int`

```swift
let user = User(name: "Alice", age: 8)

do {
    let encoder = JSONEncoder()
    let encodedData = try encoder.encode(user)
    print(String(bytes: encodedData, encoding: .utf8) ?? "")
    // "{"name":"Alice","age":8}"

    let decoder = JSONDecoder()
    let anotherUser = try decoder.decode(User.self, from: encodedData)
    print(anotherUser)
    // User(name: "Alice", age: 8)
} catch {
    print("Error: \(error)")
}
```

In the provided code:

- A `User` instance is created
- A `JSONEncoder` instance is created and used to encode the `user` instance into JSON data
- A `JSONDecoder` instance is created and used to decode the JSON data back into a `User` instance
- If any errors occur during encoding or decoding, they are caught and printed in the `catch` block

> As can be seen in the above code snippet, the `encoder.encode(user)` method returns a value of type `Data` that contains the encoded representation of the `user` instance.
> The `Data` type is used to represent a sequence of bytes. It can be used to store binary data such as image or sound files, or to encode and decode for storage or transmission.

## Custom Codable Types

In Swift, the following types are automatically conform to the `Codable` protocol: `String`, `Int`, `Double`, `Bool`, `URL`, `Data`, `Date`, `Array`, `Dictionary`. This means you can use these types as properties in a `Codable` struct or class without having to write any custom encoding or decoding logic.

If you want to use a custom type as a property in a `Codable` struct or class, you will need to make that type conform to `Codable` as well.

To add custom implementation for the `User` struct, you can define the `init(form decoder: Decoder) throws` and `encode(to encoder: Encoder) throws` functions:

```swift
struct User: Codable {
    var name: String
    var age: Int

    enum CodingKeys: String, CodingKey {
        case name
        case age
    }

    init(name: String, age: Int) {
        self.name = name
        self.age = age
    }

    init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        name = try container.decode(String.self, forKey: .name)
        age = try container.decode(Int.self, forKey: .age)
    }

    func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(name, forKey: .name)
        try container.encode(age, forKey: .age)
    }
}
```

- The `CodingKeys` enum defines the keys for the **name** and **age** properties. These keys are used to map the properties to their corresponding values when coding and decoding
- The `init(from decoder: Decoder) throws` initializer is a special initializer defined by the `Codable` protocol. It’s used to initialize a `User` instance by decoding it from a `Decoder` instance. The `Decoder` instance contains the serialized representation of the `User` instance.
- The `func encode(to encoder: Encoder) throws` function is also defined by the Codable protocol. It’s used to encode the `User` instance to an `Encoder` instance, which will contain the serialized representation of the `User` instance

## Conclusion

- The `Codable` protocol allows you to encode and decode custom types to and from a serialized representation, such as JSON
- To conform the `Codable` protocol, you can define the custom type as a property in a `Codable` struct or class
","","trF8g"]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId" FROM "public"."Post" AS "t1" WHERE "t1"."id" = $1 LIMIT $2 
    --params: ["UGeBj",1]
    
    
    COMMIT 
    --params: []
    
    
    SELECT "t1"."id", "Post_reactions"."__prisma_data__" AS "reactions" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'postId', "t3"."postId", 'blogId', "t3"."blogId", 'slug', "t3"."slug", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Reaction" AS "t2" WHERE "t1"."id" = "t2"."postId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Post_reactions" ON true WHERE "t1"."id" IN ($1,$2) 
    --params: ["UGeBj","UGeBj"]
    
    

    
    
 
    --params: ["trF8g",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NULL ORDER BY "t1"."createdAt" DESC 
    --params: []
    
    
 
    --params: ["yes-maam","yes-maam"]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["yes-maam","yes-maam"]
    
    
    SELECT "t1"."id", "Post_reactions"."__prisma_data__" AS "reactions" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'postId', "t3"."postId", 'blogId', "t3"."blogId", 'slug', "t3"."slug", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Reaction" AS "t2" WHERE "t1"."id" = "t2"."postId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Post_reactions" ON true WHERE "t1"."id" IN ($1,$2) 
    --params: ["UGeBj","UGeBj"]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "Post_comments"."__prisma_data__" AS "comments" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'updatedAt', "t3"."updatedAt", 'text', "t3"."text", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'parentId', "t3"."parentId", 'blogId', "t3"."blogId", 'postId', "t3"."postId", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Comment" AS "t2" WHERE "t1"."id" = "t2"."postId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Post_comments" ON true WHERE ("t1"."id" = $1 AND 1=1) LIMIT $2 
    --params: ["UGeBj",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId" FROM "public"."Post" AS "t1" WHERE ("t1"."slug" = $1 AND 1=1) LIMIT $2 
    --params: ["yes-maam",1]
    
    
    UPDATE "public"."Post" SET "title" = $1, "text" = $2, "slug" = $3, "excerpt" = $4, "publishedAt" = $5, "updatedAt" = $6 WHERE ("public"."Post"."id" = $7 AND 1=1) RETURNING "public"."Post"."id", "public"."Post"."count", "public"."Post"."createdAt", "public"."Post"."updatedAt", "public"."Post"."publishedAt", "public"."Post"."slug", "public"."Post"."title", "public"."Post"."text", "public"."Post"."excerpt", "public"."Post"."featureImage", "public"."Post"."userId" 
    --params: ["YES MAAM","
In Swift, the `Codable` protocol is a type alias for the  protocols:

```swift
// Declaration
typealias Codable = Decodable & Encodable
```

The `Codable` protocol allows developers to encode or decode instances of a type to and from variety formats, such as a JSON or property lists.

## Basic Usage

To use the `Codable` protocol, you need to define the types that you want to encode or decode, and make them conform the `Codable` protocol:

```swift
struct User: Codable {
    var name: String
    var age: Int
}
```

The above code is defining a struct called `User` which conforms to the `Codable` protocol, which means that it can be encoded or decoded into a different formats.

The `User` struct has two properties:

- A `name` of type `String`
- An `age` of type `Int`

```swift
let user = User(name: "Alice", age: 8)

do {
    let encoder = JSONEncoder()
    let encodedData = try encoder.encode(user)
    print(String(bytes: encodedData, encoding: .utf8) ?? "")
    // "{"name":"Alice","age":8}"

    let decoder = JSONDecoder()
    let anotherUser = try decoder.decode(User.self, from: encodedData)
    print(anotherUser)
    // User(name: "Alice", age: 8)
} catch {
    print("Error: \(error)")
}
```

In the provided code:

- A `User` instance is created
- A `JSONEncoder` instance is created and used to encode the `user` instance into JSON data
- A `JSONDecoder` instance is created and used to decode the JSON data back into a `User` instance
- If any errors occur during encoding or decoding, they are caught and printed in the `catch` block

> As can be seen in the above code snippet, the `encoder.encode(user)` method returns a value of type `Data` that contains the encoded representation of the `user` instance.
> The `Data` type is used to represent a sequence of bytes. It can be used to store binary data such as image or sound files, or to encode and decode for storage or transmission.

## Custom Codable Types

In Swift, the following types are automatically conform to the `Codable` protocol: `String`, `Int`, `Double`, `Bool`, `URL`, `Data`, `Date`, `Array`, `Dictionary`. This means you can use these types as properties in a `Codable` struct or class without having to write any custom encoding or decoding logic.

If you want to use a custom type as a property in a `Codable` struct or class, you will need to make that type conform to `Codable` as well.

To add custom implementation for the `User` struct, you can define the `init(form decoder: Decoder) throws` and `encode(to encoder: Encoder) throws` functions:

```swift
struct User: Codable {
    var name: String
    var age: Int

    enum CodingKeys: String, CodingKey {
        case name
        case age
    }

    init(name: String, age: Int) {
        self.name = name
        self.age = age
    }

    init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        name = try container.decode(String.self, forKey: .name)
        age = try container.decode(Int.self, forKey: .age)
    }

    func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(name, forKey: .name)
        try container.encode(age, forKey: .age)
    }
}
```

- The `CodingKeys` enum defines the keys for the **name** and **age** properties. These keys are used to map the properties to their corresponding values when coding and decoding
- The `init(from decoder: Decoder) throws` initializer is a special initializer defined by the `Codable` protocol. It’s used to initialize a `User` instance by decoding it from a `Decoder` instance. The `Decoder` instance contains the serialized representation of the `User` instance.
- The `func encode(to encoder: Encoder) throws` function is also defined by the Codable protocol. It’s used to encode the `User` instance to an `Encoder` instance, which will contain the serialized representation of the `User` instance

## Conclusion

- The `Codable` protocol allows you to encode and decode custom types to and from a serialized representation, such as JSON
- To conform the `Codable` protocol, you can define the custom type as a property in a `Codable` struct or class
","yes-maam","holerrrr","2024-07-25 06:25:05.432 UTC","2024-07-25 06:25:05.433 UTC","UGeBj"]
    
    
    SELECT "t1"."id", "Post_reactions"."__prisma_data__" AS "reactions" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'postId', "t3"."postId", 'blogId', "t3"."blogId", 'slug', "t3"."slug", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Reaction" AS "t2" WHERE "t1"."id" = "t2"."postId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Post_reactions" ON true WHERE "t1"."id" IN ($1,$2) 
    --params: ["UGeBj","UGeBj"]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    
    SELECT 1 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    
    SELECT 1 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["",""]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["dingdangdong","dingdangdong"]
    
    

    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "Post_comments"."__prisma_data__" AS "comments" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'updatedAt', "t3"."updatedAt", 'text', "t3"."text", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'parentId', "t3"."parentId", 'blogId', "t3"."blogId", 'postId', "t3"."postId", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Comment" AS "t2" WHERE "t1"."id" = "t2"."postId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Post_comments" ON true WHERE ("t1"."id" = $1 AND 1=1) LIMIT $2 
    --params: ["ptI0J",1]
    
    
 
    --params: [1,"MAn9A",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    

    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["yes-maam","yes-maam"]
    
    
    SELECT "t1"."id", "Post_reactions"."__prisma_data__" AS "reactions" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'postId', "t3"."postId", 'blogId', "t3"."blogId", 'slug', "t3"."slug", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Reaction" AS "t2" WHERE "t1"."id" = "t2"."postId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Post_reactions" ON true WHERE "t1"."id" IN ($1,$2) 
    --params: ["UGeBj","UGeBj"]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "Post_comments"."__prisma_data__" AS "comments" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'updatedAt', "t3"."updatedAt", 'text', "t3"."text", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'parentId', "t3"."parentId", 'blogId', "t3"."blogId", 'postId', "t3"."postId", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Comment" AS "t2" WHERE "t1"."id" = "t2"."postId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Post_comments" ON true WHERE ("t1"."id" = $1 AND 1=1) LIMIT $2 
    --params: ["UGeBj",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NULL ORDER BY "t1"."createdAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["yes-maam","yes-maam"]
    
    
    SELECT "t1"."id", "Post_reactions"."__prisma_data__" AS "reactions" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'postId', "t3"."postId", 'blogId', "t3"."blogId", 'slug', "t3"."slug", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Reaction" AS "t2" WHERE "t1"."id" = "t2"."postId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Post_reactions" ON true WHERE "t1"."id" IN ($1,$2) 
    --params: ["UGeBj","UGeBj"]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "Post_comments"."__prisma_data__" AS "comments" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'updatedAt', "t3"."updatedAt", 'text', "t3"."text", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'parentId', "t3"."parentId", 'blogId', "t3"."blogId", 'postId', "t3"."postId", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Comment" AS "t2" WHERE "t1"."id" = "t2"."postId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Post_comments" ON true WHERE ("t1"."id" = $1 AND 1=1) LIMIT $2 
    --params: ["UGeBj",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    

    
    
 
    --params: ["trF8g",1]
    
    
 
    --params: ["yes-maam","yes-maam"]
    
    
    SELECT "t1"."id", "Post_reactions"."__prisma_data__" AS "reactions" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'postId', "t3"."postId", 'blogId', "t3"."blogId", 'slug', "t3"."slug", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Reaction" AS "t2" WHERE "t1"."id" = "t2"."postId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Post_reactions" ON true WHERE "t1"."id" IN ($1,$2) 
    --params: ["UGeBj","UGeBj"]
    
    

    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "Post_comments"."__prisma_data__" AS "comments" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'updatedAt', "t3"."updatedAt", 'text', "t3"."text", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'parentId', "t3"."parentId", 'blogId', "t3"."blogId", 'postId', "t3"."postId", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Comment" AS "t2" WHERE "t1"."id" = "t2"."postId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Post_comments" ON true WHERE ("t1"."id" = $1 AND 1=1) LIMIT $2 
    --params: ["UGeBj",1]
    
    

    
    
 
    --params: ["trF8g",1]
    
    

    
    
    SELECT "t1"."id", "t1"."count", "t1"."createdAt", "t1"."updatedAt", "t1"."publishedAt", "t1"."slug", "t1"."title", "t1"."text", "t1"."excerpt", "t1"."featureImage", "t1"."userId", JSONB_BUILD_OBJECT('reactions', COALESCE("t2"."_aggr_count_reactions", 0)) AS "_count" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COUNT(*) AS "_aggr_count_reactions" FROM "public"."Reaction" AS "t3" WHERE "t1"."id" = "t3"."postId") AS "t2" ON true WHERE "t1"."publishedAt" IS NOT NULL ORDER BY "t1"."publishedAt" DESC 
    --params: []
    
    
 
    
    
 
    --params: ["dingdangdong","dingdangdong"]
    
    
    SELECT "t1"."id", "Post_reactions"."__prisma_data__" AS "reactions" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'postId', "t3"."postId", 'blogId', "t3"."blogId", 'slug', "t3"."slug", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Reaction" AS "t2" WHERE "t1"."id" = "t2"."postId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Post_reactions" ON true WHERE "t1"."id" IN ($1,$2) 
    --params: ["ptI0J","ptI0J"]
    
    
    SELECT "t1"."sessionToken", "t1"."userId", "t1"."expires", "Session_user"."__prisma_data__" AS "user" FROM "public"."Session" AS "t1" LEFT JOIN LATERAL (SELECT JSONB_BUILD_OBJECT('id', "t2"."id", 'createdAt', "t2"."createdAt", 'name', "t2"."name", 'image', "t2"."image", 'email', "t2"."email", 'pendingEmail', "t2"."pendingEmail", 'role', "t2"."role", 'isAdmin', "t2"."isAdmin", 'emailVerified', "t2"."emailVerified", 'description', "t2"."description", 'location', "t2"."location", 'username', "t2"."username") AS "__prisma_data__" FROM "public"."User" AS "t2" WHERE "t1"."userId" = "t2"."id" LIMIT $1) AS "Session_user" ON true WHERE ("t1"."sessionToken" = $2 AND 1=1) LIMIT $3 
    --params: [1,"wHoDisB1Tchl2yfe",1]
    
    
 
    --params: ["trF8g",1]
    
    
    SELECT "t1"."id", "Post_comments"."__prisma_data__" AS "comments" FROM "public"."Post" AS "t1" LEFT JOIN LATERAL (SELECT COALESCE(JSONB_AGG("__prisma_data__"), '[]') AS "__prisma_data__" FROM (SELECT "t4"."__prisma_data__" FROM (SELECT JSONB_BUILD_OBJECT('id', "t3"."id", 'createdAt', "t3"."createdAt", 'updatedAt', "t3"."updatedAt", 'text', "t3"."text", 'userId', "t3"."userId", 'bookmarkId', "t3"."bookmarkId", 'questionId', "t3"."questionId", 'stackId', "t3"."stackId", 'parentId', "t3"."parentId", 'blogId', "t3"."blogId", 'postId', "t3"."postId", 'eventId', "t3"."eventId", 'caseId', "t3"."caseId") AS "__prisma_data__" FROM (SELECT "t2".* FROM "public"."Comment" AS "t2" WHERE "t1"."id" = "t2"."postId" /* root select */) AS "t3" /* inner select */) AS "t4" /* middle select */) AS "t5" /* outer select */) AS "Post_comments" ON true WHERE ("t1"."id" = $1 AND 1=1) LIMIT $2 
    --params: ["ptI0J",1]
    
    
 
    SELECT "t1"."id", "t1"."userId", "Comment_author"."__prisma_data__" AS "author" FROM "public"."Comment" AS "t1" LEFT JOIN LATERAL (SELECT JSONB_BUILD_OBJECT('id', "t2"."id", 'createdAt', "t2"."createdAt", 'name', "t2"."name", 'image', "t2"."image", 'email', "t2"."email", 'pendingEmail', "t2"."pendingEmail", 'role', "t2"."role", 'isAdmin', "t2"."isAdmin", 'emailVerified', "t2"."emailVerified", 'description', "t2"."description", 'location', "t2"."location", 'username', "t2"."username") AS "__prisma_data__" FROM "public"."User" AS "t2" WHERE "t1"."userId" = "t2"."id" LIMIT $1) AS "Comment_author" ON true WHERE ("t1"."id" = $2 AND 1=1) LIMIT $3
    
    