import {Router} from 'express'

import * as videoController from './videos.controller'

const router = Router()

router.get('/videos', videoController.getVideos)

router.get('/videos/:id', videoController.getVideo)

router.post('/videos', videoController.addVideo)

router.put('/videos/:id', videoController.updateVideo)

router.delete('/videos/:id', videoController.deleteVideo)

export default router