'use strict'

const { transparentBackground } = require("transparent-background");

module.exports = async (event, context) => {
  const buffer = Buffer.from(event.body, 'base64');
  const transparent = await transparentBackground(buffer, "png", {
      fast: true
  });
  const reconverted = transparent.toString('base64');
  return context.status(200).succeed(reconverted);
}
