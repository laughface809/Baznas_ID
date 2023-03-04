import React from 'react';
import { Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import { PaperContentMenu } from '../styles';
import LogoImage from '../../../../assets/people.webp'

export default function DonorWall({
  users
}){

  return(
    <Paper sx={{paddingRight: '1rem', overflow: 'hidden', textAlign: 'justify', boxShadow: 'inset 3px -13px 8px -10px lightgray'}}>
      <Typography sx={PaperContentMenu('12rem')}>
      {
      users && users.length > 0 && users.map((ev, index) => {
        if(index > 0){
          return (
            <div style={{borderBottom: '1px solid lightgray', paddingBottom: '1rem', paddingTop: '1rem', borderRadius: '4px'}}>
            <div style={{display: 'flex', marginBottom: '1rem'}}>
              <img src={LogoImage} alt="" style={{width: '3rem', marginRight: '1rem', height: '3rem'}} />
              <Typography>
                <t style={{fontWeight: 'bold'}}>{ev.Nama}</t> ( + Rp.{ev.Jumlah})<br />
                {ev.Bank} - {ev.No_rek} <br />
                <t style={{fontStyle: 'italic'}}>{ev.Keterangan}</t> <br />
                <t style={{fontSize: '0.8rem', color: 'gray'}}>{ev.Waktu}</t>
              </Typography>
            </div>
            <div style={{opacity: 0, marginTop: '-4rem'}}>
            Badan Amil Zakat Nasional Kota Denpasar UPZ Al Hidayah Gatsu
            </div>
          </div>
        )
        }
      })
      }
      {!users.length && <p>
      Request ke database mencapai limit
      </p>}
      </Typography>
    </Paper>
  )
}