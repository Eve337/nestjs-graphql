import {
  getItem,
  getItems,
  createItem,
  updateItem,
  deleteItem,
} from './../utils/utils';
import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { NewGenre } from './models/genre';

@Injectable()
export class GenreService {
  private readonly client: AxiosInstance;
  constructor() {
    this.client = axios.create({
      baseURL: process.env.GENRES_API,
    });
  }

  public async getGenre(id: string) {
    return await getItem(id, this.client);
  }

  public async getGenres(limit: number, offset: number) {
    return await getItems(limit, offset, this.client);
  }

  public async createGenre(newGenre: NewGenre, token: string) {
    return await createItem(newGenre, token, this.client);
  }

  public async updateGenre(id: string, updatedGenre: NewGenre, token: string) {
    return await updateItem(id, token, this.client, updatedGenre);
  }

  public async deleteGenre(id: string, token: string) {
    return await deleteItem(id, token, this.client);
  }
}
