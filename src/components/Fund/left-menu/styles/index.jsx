export const PaperContentMenu = (ev) => {
    let a = {
      height: '100%', 
      marginRight: '-50px', 
      paddingRight: '1rem', 
      overflowY: 'scroll', 
      maxHeight: ev,
      background: 'linear-gradient(white 30%, rgba(255,255,255,0)), linear-gradient(rgba(255,255,255,0), white 70%) 0 100%, radial-gradient(farthest-side at 50% 0, rgba(0,0,0,.2), rgba(0,0,0,0)), radial-gradient(farthest-side at 50% 100%, rgba(0,0,0,.2), rgba(0,0,0,0)) 0 100%',
      backgroundRepeat: 'no-repeat',
      backgroundColor: 'white',
      backgroundSize: '100% 40px, 100% 40px, 100% 14px, 100% 14px',
      backgroundAttachment: 'scroll, local, scroll, scroll'
    }
    return a
  }