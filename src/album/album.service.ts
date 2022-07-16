import {
  getItem,
  getItems,
  createItem,
  updateItem,
  deleteItem,
} from './../utils/utils';
import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { NewAlbum } from './models/album';

@Injectable()
export class AlbumService {
  private readonly client: AxiosInstance;
  constructor() {
    this.client = axios.create({
      baseURL: process.env.ALBUM_API,
    });
  }

  public async getAlbum(id: string) {
    return await getItem(id, this.client);
  }

  public async getAlbums(limit: number, offset: number) {
    return await getItems(limit, offset, this.client);
  }

  public async createAlbum(newAlbum: NewAlbum, token: string) {
    return await createItem(newAlbum, token, this.client);
  }

  public async updateAlbum(id: string, updatedAlbum: NewAlbum, token: string) {
    return await updateItem(id, token, this.client, updatedAlbum);
  }

  public async deleteAlbum(id: string, token: string) {
    return await deleteItem(id, token, this.client);
  }
}
