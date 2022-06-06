import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1200px;
  min-width: 700px;
  margin: auto;
  padding: 40px;
`;

export const Skeleton = styled.div`
  display: flex;
  position: relative;
  .poster {
    width: 500px;
    height: calc(500px * 3 / 2);
    margin-right: 70px;
    flex-shrink: 0;
  }
  .specs {
    flex-grow: 1;
  }
  .skeleton {
    border-radius: 10px;
    background-color: #ccc;
    &.title {
      width: 80%;
      height: 70px;
    }
    &.plot {
      width: 100%;
      height: 250px;
      margin-top: 20px;
    }
    &.etc {
      width: 50%;
      height: 50px;
      margin-top: 20px;
    }
  }
`;

export const MovieDetail = styled.div`
  display: flex;
  .poster {
    width: 500px;
    height: calc(500px * 3 / 2);
    flex-shrink: 0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 10px;
    margin-right: 70px;
  }
  .specs {
    flex-grow: 1;
    .title {
      font-size: 70px;
      line-height: 1;
      margin-bottom: 30px;
    }
    .labels {
      color: #facd;
      span {
        &::after {
          content: '\\00B7';
          margin: 0 6px;
        }
        &:last-child::after {
          display: none;
        }
      }
    }
    .plot {
      margin-top: 20px;
    }
    .ratings {
      .rating-wrap {
        display: flex;
      }
      .rating {
        display: flex;
        align-items: center;
        margin-right: 32px;
        img {
          height: 30px;
          flex-shrink: 0;
          margin-right: 6px;
        }
      }
    }
    h3 {
      margin: 24px 0 6px;
      font-size: 20px;
    }
  }
`;
