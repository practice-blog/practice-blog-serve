import { Provide } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/orm';
import { Photo } from '../entity/photo';
import { Repository } from 'typeorm';

@Provide()
export class PhotoService {

  @InjectEntityModel(Photo)
  photoModel: Repository<Photo>;
  // save
  async savePhoto(data) {
    let photo = new Photo()
    photo.description = data.description,
    photo.name = data.name,
    photo.filename = data.filename,
    photo.views = data.views
    photo.id = data.id
    photo.isPublished = data.isPublished
    await this.photoModel.save(photo)
  }

  //find
  async find() {
   return await this.photoModel.find()
  }

  // update
  async update(date) {
    let updatePhoto = await this.photoModel.findOne({
      where: {
        id: 1
      }
    })
    updatePhoto.name = date.name
    await this.photoModel.save(updatePhoto)
  }

}