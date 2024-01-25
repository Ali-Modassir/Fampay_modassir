/**
 * @swagger
 * tags:
 *   name: videos
 *   description: API to fetch latest youtube videos
*/

/**
 * @swagger
 * /api/v1/videos:
 *   get:
 *     summary: Get all videos
 *     description: Retrieve a list of latest videos with pagination and search options
 *     parameters:
 *       - in: query
 *         name: pageIndex
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number (default is 1) (optional)
 *       - in: query
 *         name: pageSize
 *         schema:
 *           type: integer
 *           default: 50
 *         description: Number of items per page (default is 50) (optional)
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Search term for videos (optional)
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               pageIndex: 1
 *               pageSize: 10
 *               totalCount: 20
 *               data:
 *                 videos:
 *                   - video1
 *                   - video2
 */
const { Router } = require("express");
const router = Router();

const videosController = require("../controllers/videosController");

router.get("/", videosController.getVideos);

module.exports = router;
