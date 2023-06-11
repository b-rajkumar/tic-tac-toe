const chunk = function(list, chunkSize, overlapCount = 0) {
  const isChunkPossible = (chunkSize - overlapCount > 0) && (list.length - chunkSize > 0);

  if(!isChunkPossible) {
    return list.slice();
  }

  return list.reduce(function(chunks, number, index) {
    return createChunk(chunks, number, index, chunkSize, overlapCount, list);
  }, []);
};

const createChunk = function(chunks, _, index, chunkSize, overlapCount, list) {
  const delta = chunkSize - overlapCount;
  const deltaOfIndex = list.length - index;

  if(index % delta === 0 && deltaOfIndex >= overlapCount || deltaOfIndex === overlapCount) {
    chunks.push(list.slice(index, index + chunkSize));
  }

  return chunks;
};

exports.chunk = chunk;