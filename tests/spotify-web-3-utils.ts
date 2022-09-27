import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  AlbumAdded,
  OwnershipTransferred
} from "../generated/SpotifyWeb3/SpotifyWeb3"

export function createAlbumAddedEvent(
  id: BigInt,
  owner: Address,
  albumAddress: Address,
  songsCount: BigInt,
  timeStamp: BigInt,
  albumName: string
): AlbumAdded {
  let albumAddedEvent = changetype<AlbumAdded>(newMockEvent())

  albumAddedEvent.parameters = new Array()

  albumAddedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  albumAddedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  albumAddedEvent.parameters.push(
    new ethereum.EventParam(
      "albumAddress",
      ethereum.Value.fromAddress(albumAddress)
    )
  )
  albumAddedEvent.parameters.push(
    new ethereum.EventParam(
      "songsCount",
      ethereum.Value.fromUnsignedBigInt(songsCount)
    )
  )
  albumAddedEvent.parameters.push(
    new ethereum.EventParam(
      "timeStamp",
      ethereum.Value.fromUnsignedBigInt(timeStamp)
    )
  )
  albumAddedEvent.parameters.push(
    new ethereum.EventParam("albumName", ethereum.Value.fromString(albumName))
  )

  return albumAddedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}
