const Image = require('../Models/Image')
const WorkPhoto = require('../Models/WorkPhoto')
const Employee = require('../Models/Employee')
const multer = require("multer");
const path = require("path");

const sanitizeFilename = (filename) => {
    return filename.replace(/[^a-z0-9\.\_\-]/gi, 'i');
};

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const sanitizedFilename = sanitizeFilename(file.originalname);
        cb(null, uniqueSuffix + '-' + sanitizedFilename);
    },
});

const upload = multer({ storage: storage });

class imageController{
    async getImage(req, res) {
        try {
            const image = await Image.findByPk(req.params.idImage);

            if (!image) {
                return res.status(404).send('Изображение не найдено');
            }

            const imagePath = path.resolve(__dirname, '../uploads', image.path);

            res.sendFile(imagePath);
        } catch (e) {
            console.log(e);
            res.status(500).send({ message: 'Ошибка получения изображения' });
        }
    }

    async getImageByEmployeeId (req, res) {
        try {
            const employee = await Employee.findByPk(req.params.idEmployee);
            const image = await Image.findByPk(employee.idImage);

            const imagePath = path.resolve(__dirname, '../uploads', image.path);

            res.sendFile(imagePath);
        } catch (e) {
            console.log(e)
            res.status(500).send({message: "Ошибка получения изображения"});
        }
    };

    async uploadEmployeeAvatar(req, res) {
        const idEmployee = req.params.idEmployee;

        upload.single('image')(req, res, async () => {
            const file = req.file;

            try {
                const employee = await Employee.findByPk(idEmployee)

                const image = await Image.create({
                    path: file.filename,
                });

                await employee.update({
                    idImage: image.idImage
                })

                await employee.save()

                res.status(201).send({ message: 'Изображение успешно загружено' });
            } catch (e) {
                console.log(e);
                res.status(500).send({ message: 'Ошибка загрузки изображения' });
            }
        });
    }

    async uploadEmployeeWork(req, res) {
        const idEmployee = req.params.idEmployee;

        upload.single('image')(req, res, async () => {
            const file = req.file;

            try {
                const image = await Image.create({
                    path: file.filename,
                });

                await WorkPhoto.create({
                    idEmployee: idEmployee,
                    idImage: image.idImage
                })

                res.status(201).send({ message: 'Изображение успешно загружено' });
            } catch (e) {
                console.log(e);
                res.status(500).send({ message: 'Ошибка загрузки изображения' });
            }
        });
    }

    async removeEmployeeWork(req, res) {
        const idEmployee = req.params.idEmployee;
        const idImage = req.params.idImage;

        try {
            await WorkPhoto.destroy({
                where: [
                    {idEmployee: idEmployee},
                    {idImage: idImage}
                ],
            })

            res.status(201).send({message: 'Изображение успешно удалено'});
        } catch (e) {
            console.log(e);
            res.status(500).send({message: 'Ошибка удаления изображения'});
        }
    }

    async getWorks(req, res){
        try {
            const images = await WorkPhoto.findAll({
                order: [
                ['idWorkPhoto', 'DESC']
            ]
        });

            if (!images) {
                return res.status(404).send('Изображения не найдены');
            }

            res.status(200).send(images);
        } catch (e) {
            console.log(e);
            res.status(500).send({ message: 'Ошибка получения изображения' });
        }
    }

    async getEmployeeWorks(req, res){
        try {
            const idEmployee = req.params.idEmployee
            const images = await WorkPhoto.findAll({where: {idEmployee: idEmployee}, order: [['idWorkPhoto', 'DESC']]});

            if(!idEmployee){
                return res.status(404).send({ message: 'Мастер не найден' });
            }

            if (!images) {
                return res.status(404).send({ message: 'Изображения не найдены' });
            }

            res.status(200).send(images);
        } catch (e) {
            console.log(e);
            res.status(500).send({ message: 'Ошибка получения изображения' });
        }
    }
}

module.exports = new imageController()