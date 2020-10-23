import { RequestHandler } from 'express'

import Video from './videos'

const idPattern = /^[0-9a-fA-F]{24}$/

export const addVideo: RequestHandler = async (req, res) => {
    try {
        let foundVideo = await Video.findOne({ url: req.body.url })
        if (foundVideo) {
            return res.status(400).json({ message: "The URL already exists" })
        }
        const video = new Video(req.body)
        const createdVideo = await video.save()
        return res.json(createdVideo)
    } catch (error) {
        res.json(error)
    }
}

export const getVideos: RequestHandler = async (req, res) => {
    try {
        const videos = await Video.find()
        if (videos.length === 0) {
            return res.status(204).json({ message: 'No videos to show' })
        }
        return res.json(videos)
    } catch (error) {
        return res.json(error)
    }
}

export const getVideo: RequestHandler = async (req, res) => {
    try {
        const id = req.params.id
        if (id.match(idPattern)) {
            const video = await Video.findById(id)
            if (!video) {
                return res.status(404).json({ message: "Video not found" })
            }
            return res.json(video)
        } else {
            return res.status(400).json({ message: "Id not valid" })
        }
    } catch (error) {
        console.log(error)
    }
}

export const updateVideo: RequestHandler = async (req, res) => {
    try {
        const id = req.params.id
        if (id.match(idPattern)) {
            const newVideo = req.body
            const video = await Video.findByIdAndUpdate(id, newVideo, { new: true })
            if (!video) {
                return res.status(404).json({ message: "Video not found" })
            }
            return res.json(video)
        } else {
            return res.status(400).json({ message: "Id not valid" })
        }
    } catch (error) {
        return res.json(error)
    }
}

export const deleteVideo: RequestHandler = async (req, res) => {
    try {
        const id = req.params.id
        if (id.match(idPattern)) {
            const video = await Video.findByIdAndDelete(id)
            if (!video) {
                return res.status(404).json({ message: "Video not found" })
            }
            return res.json(video)
        } else {
            return res.status(400).json({ message: "Id not valid" })
        }
    } catch (error) {
        return res.json(error)
    }
}