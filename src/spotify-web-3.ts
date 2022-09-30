import { BigInt } from "@graphprotocol/graph-ts";
import { AlbumAdded } from "../generated/SpotifyWeb3/SpotifyWeb3";
import { Album as AlbumEntity } from "../generated/schema";

export function handleAlbumAdded(event: AlbumAdded): void {
  const Album = new AlbumEntity(event.params.id.toHex());

  Album.id = event.transaction.hash.toHex();
  Album.albumAddress = event.params.albumAddress;
  Album.albumId = event.params.id;
  Album.owner = event.params.owner;
  Album.songsCount = event.params.songsCount;
  Album.timeStamp = event.params.timeStamp;
  Album.albumName = event.params.albumName;

  Album.save();
}
