import styled from "@emotion/styled"

export const ModalBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #181818;
`

export const Modalcontainerstyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 60%;
`

export const ContentContainer = styled.div`
  margin: 5px;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 350px;
`
export const ModalContent = styled.div`
  min-width: 100%;
  min-height: 100%;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;

  > title {
    display: flex;
  }
`

export const Modaltitle = styled.div`
  padding: 1.5rem 1.5rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 2px solid #d7d7d7;
  font-size: 20px;
  font-weight: bold;
`
export const UserProfile = styled.div`
  padding: 0.7rem 1rem 1rem 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 2px solid #d7d7d7;
  font-size: 16px;
  font-weight: 600;
`

export const ProfileImageContainer = styled.div`
  padding: 4px;
  overflow: hidden;
  border-radius: 50%;
  margin-right: 10px;
  border: 1px solid #111112;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
export const UtilIconsstyle = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid #d7d7d7;
  justify-content: flex-end;
  align-items: center;
  margin-right: 20px;
  > img {
    margin: 5px;
  }
`
export const Locationholder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: auto;
  margin-left: 20px;
`
export const Buttonsubmit = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  height: 40px;
  width: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d2b48c;
  color: white;
  font-size: 20px;
  font-weight: 600;
`
export const Inputbox = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 20px;
  border-bottom: 2px solid #d7d7d7;
  border-top: 2px solid #d7d7d7;
`
