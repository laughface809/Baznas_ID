import React from 'react';
import { Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import { PaperContentMenu } from '../styles';
import LogoImage from '../../../../assets/logo.jpg'

export default function Disbursement(){

  const data = [
  {
    name: 'UPZ Al Hidayah Bali',
    time: '1 Bulan yang lalu',
    value: '0',
    bank: 'BSI',
    number: '7193239368',
    message: 'Alokasi Dana akan di gunakan untuk menebus Ijazah atas nama'
  },
]

  return(
    <Paper sx={{paddingRight: '1rem', overflow: 'hidden', textAlign: 'justify', boxShadow: 'inset 3px -13px 8px -10px lightgray'}}>
      <Typography sx={PaperContentMenu('12rem')}>
      {data.map((ev) => {
        return (
            <div style={{borderBottom: '1px solid lightgray', paddingBottom: '1rem', paddingTop: '1rem', borderRadius: '4px'}}>
            <div style={{display: 'flex', marginBottom: '1rem'}}>
              <img src={LogoImage} alt="" style={{width: '3rem', marginRight: '1rem', height: '3rem'}} />
              <Typography>
                <t style={{fontWeight: 'bold'}}>{ev.name}</t> ( - Rp.{ev.value})<br />
                {ev.bank} - {ev.number} <br />
                Rencana Penggunaan Dana Pencairan: <t style={{fontStyle: 'italic'}}>{ev.message}</t> <br />
                <t style={{fontSize: '0.8rem', color: 'gray'}}>{ev.time}</t>
              </Typography>
            </div>
            <div style={{opacity: 0, marginTop: '-4rem'}}>
            Badan Amil Zakat Nasional Kota Denpasar UPZ Al Hidayah Gatsu
            </div>
          </div>
        )
      })}
      </Typography>
    </Paper>
  )
}