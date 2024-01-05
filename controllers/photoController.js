import Photo from "../models/photoModel.js";

const createPhoto = async (req, res) => {

    try {
        const photo =  await Photo.create(req.body);
        res.status(201).json(
            {
                status: 'success',
                data: {
                    photo
                }
            }
        );


    } catch (error) {
        res.status(500).json(
            {
                status: 'fail',
                message: error.message
            }
        );
    }
  
};

const getAllPhotos = async (req, res) => {
    
        try {
            const photos =  await Photo.find();
            res.status(200).json(
                {
                    status: 'success',
                    data: {
                        photos
                    }
                }
            );
        } catch (error) {
            res.status(500).json(
                {
                    status: 'fail',
                    message: error.message
                }
            );
        }
    };

export {createPhoto, getAllPhotos };

