import styled from 'styled-components'

const StyledHome = styled.div`
  width: 1280px;
  margin: 0 auto;

  .header{
    padding: 10px 0;
    text-align: center;
  }
  .list-news{
    display: flex;
    flex-wrap: wrap;
    padding: 0;
  }
  .item-new{
    display: inline-block;
    width: 50%;
  }
  .footer{
    padding: 10px 0;
    text-align: center;
  }
`

export {StyledHome}