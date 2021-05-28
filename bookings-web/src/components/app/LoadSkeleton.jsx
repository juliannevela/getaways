import PropTypes from 'prop-types';
import React from 'react';
import { Skeleton } from '@material-ui/lab';
import { Box, Grid, Typography } from '@material-ui/core';

const Loading = ({ loading, places }) => {
  return (
    <Grid container wrap="nowrap">
      {loading
        ? Array.from(new Array(25))
        : places.map((item, index) => (
            <Card key={index} width={400} marginRight={0.5} my={5}>
              {item ? (
                <img
                  style={{ width: 400, height: 300 }}
                  alt={item.name}
                  src={item.imageThumbnail}
                />
              ) : (
                <Skeleton variant="rect" width={400} height={300} />
              )}

              {item ? (
                <Card pr={2}>
                  <Typography gutterBottom variant="body2">
                    {item.name}
                  </Typography>
                  <Typography
                    display="block"
                    variant="caption"
                    color="textSecondary"
                  >
                    {item.location} + {item.pricePerNight}
                  </Typography>
                </Card>
              ) : (
                <Box pt={0.5}>
                  <Skeleton />
                  <Skeleton width="60%" />
                </Box>
              )}
            </Card>
          ))}
      ;
    </Grid>
  );
};

Loading.propTypes = {
  loading: PropTypes.bool,
};

// <svg
//   id="SvgjsSvg1038"
//   width="288"
//   height="288"
//   xmlns="http://www.w3.org/2000/svg"
//   version="1.1"
// >
//   <defs id="SvgjsDefs1039"></defs>
//   <g id="SvgjsG1040">
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="288"
//       height="288"
//       viewBox="0 0 512 512"
//     >
//       <circle
//         cx="256"
//         cy="256"
//         r="232"
//         fill="#ff5959"
//         className="colord3effe svgShape"
//       ></circle>
//       <circle
//         cx="256"
//         cy="256"
//         r="192"
//         fill="#facf5a"
//         className="color80daff svgShape"
//       ></circle>
//       <path
//         fill="#49beb7"
//         d="M189.0376,377.1877l-2.0752-10.3754a19.7772,19.7772,0,0,1,10.5486-21.5679l7.5564-3.7781A19.7772,19.7772,0,0,0,216,323.7771h0A19.7771,19.7771,0,0,0,196.2229,304H168l-21.6189-10.8094a20,20,0,0,0-20.0383,1.2475L112,304H70.0747a192.6331,192.6331,0,0,0,77.3711,110.2771l31.0432-15.5217A19.7771,19.7771,0,0,0,189.0376,377.1877Z"
//         className="colorfac850 svgShape"
//       ></path>
//       <rect
//         width="16"
//         height="16"
//         x="224"
//         y="368"
//         fill="#ff5959"
//         className="colord3effe svgShape"
//       ></rect>
//       <rect
//         width="16"
//         height="16"
//         x="288"
//         y="112"
//         fill="#ff5959"
//         className="colord3effe svgShape"
//       ></rect>
//       <rect
//         width="16"
//         height="16"
//         x="352"
//         y="312"
//         fill="#ff5959"
//         className="colord3effe svgShape"
//       ></rect>
//       <rect
//         width="16"
//         height="16"
//         x="104"
//         y="200"
//         fill="#ff5959"
//         className="colord3effe svgShape"
//       ></rect>
//       <path
//         fill="#49beb7"
//         d="M313.1506,252.0821l7.7938-8.755L304.729,235.324c-9.0419-4.4626-11.547-16.2112-5.2037-24.4047l7.5693-9.7772a16.9576,16.9576,0,0,1,4.6578-4.1453l5.7412-3.4569a15.9255,15.9255,0,0,1,22.139,5.4126l4.4493,7.6835a15.8352,15.8352,0,0,0,19.7129,6.6184l11.2473-4.4957a15.8356,15.8356,0,0,1,19.713,6.6183l7.5231,12.992a16.3609,16.3609,0,0,1-.5916,17.12l-10.5135,16.117a16.5,16.5,0,0,1-21.0015,6.0167l-7.519-3.7109-16.01,17.9847a9.784,9.784,0,0,1-13.7566,1.0023l-19.1381-17.0371A9.784,9.784,0,0,1,313.1506,252.0821Z"
//         className="colorfac850 svgShape"
//       ></path>
//       <path
//         fill="#085f63"
//         d="M304 320c0 13.2548-24 40-24 40s-24-26.7452-24-40a24 24 0 0 1 48 0zM175.7806 276.7745c0 19.4007-31.52 58.5469-31.52 58.5469s-31.52-39.1462-31.52-58.5469 14.1118-35.1282 31.52-35.1282S175.7806 257.3737 175.7806 276.7745zM384 171.1282c0 19.4007-31.52 58.5469-31.52 58.5469s-31.52-39.1462-31.52-58.5469S335.0724 136 352.48 136 384 151.7274 384 171.1282z"
//         className="color25b1fa svgShape"
//       ></path>
//       <path
//         fill="#49beb7"
//         d="M162.84,125.87l24.9681-18.7261a10,10,0,0,1,9.1623-1.4868l38.1049,12.7016a10,10,0,0,1,6.416,6.6134l21.0011,70.0038a10,10,0,0,1-1.77,9.12l-20.9144,26.143a10,10,0,0,1-15.6174,0L202.474,203.0925A10,10,0,0,0,196.08,199.44l-41.1031-5.8718a10,10,0,0,1-8.2872-12.3249l12.45-49.7988A10,10,0,0,1,162.84,125.87Z"
//         className="colorfac850 svgShape"
//       ></path>
//       <path
//         fill="#085f63"
//         d="M295.9722 432l-35.5192-15.68a10 10 0 0 1 0-16.641l30.4808-12.3205A20 20 0 0 1 302.0278 384h26.69L400 336h24l-32 56 48 8 32-24h16l-16 56zM216.0278 136l35.5192-15.68a10 10 0 0 0 0-16.641L221.0662 91.359A20 20 0 0 0 209.9722 88h-26.69L112 40H88l32 56-48 8L40 80H24l16 56z"
//         className="color25b1fa svgShape"
//       ></path>
//       <path
//         fill="#facf5a"
//         d="M32 256A223.3781 223.3781 0 0 1 57.6438 152H39.731A239.6379 239.6379 0 0 0 67.9541 404.9741l12.5313-9.9482A221.4639 221.4639 0 0 1 32 256zM408 40V70.3877A239.6561 239.6561 0 0 0 152 39.7311V57.6444A223.6452 223.6452 0 0 1 410.4785 93.939 8.0006 8.0006 0 0 0 424 88.1494V40zM256 480A223.3695 223.3695 0 0 1 93.9385 410.48a8 8 0 0 0-13.7891 5.5l-.1494 56 16 .043.1-37.1734A239.567 239.567 0 0 0 384 458.9229V439.7206A223.7984 223.7984 0 0 1 256 480zM437.1729 98.7524l-12.0762 10.4952A223.7524 223.7524 0 0 1 480 256a221.215 221.215 0 0 1-30.0166 112h18.3147A237.23 237.23 0 0 0 496 256 239.75 239.75 0 0 0 437.1729 98.7524z"
//         className="color80daff svgShape"
//       ></path>
//     </svg>
//   </g>
// </svg>

export default Loading;
