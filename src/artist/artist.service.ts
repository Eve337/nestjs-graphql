import { NewArtist } from './models/Artist';
import {
  getItem,
  getItems,
  createItem,
  updateItem,
  deleteItem,
} from './../utils/utils';
import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

@Injectable()
export class ArtistService {
  private readonly client: AxiosInstance;
  constructor() {
    this.client = axios.create({
      baseURL: process.env.ARTIST_API,
    });
  }

  public async getArtist(id: string) {
    return await getItem(id, this.client);
  }

  public async getArtists(limit: number, offset: number) {
    return await getItems(limit, offset, this.client);
  }

  public async createArtist(newArtist: NewArtist, token: string) {
    return await createItem(newArtist, token, this.client);
  }

  public async updateArtist(
    id: string,
    updateArtist: NewArtist,
    token: string,
  ) {
    return await updateItem(id, token, this.client, updateArtist);
  }

  public async deleteArtist(id: string, token: string) {
    return await deleteItem(id, token, this.client);
  }
}
