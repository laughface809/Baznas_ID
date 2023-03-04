import React from 'react';
import { Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import { PaperContentMenu } from '../styles';
import LogoImage from '../../../../assets/logo.jpg'
import LogoImages from '../../../../assets/people.webp'

export default function Information(){

  const data = [
  {
    name: 'UPZ Al Hidayah Bali',
    status: true,
    logo: LogoImage
  },
  {
    name: 'Yayasan Taman Pintar Bali',
    status: false,
    logo: LogoImages
  },
]

  return(
    <Paper sx={{paddingRight: '1rem', overflow: 'hidden', textAlign: 'justify', boxShadow: 'inset 3px -13px 8px -10px lightgray'}}>
      <Typography sx={PaperContentMenu('12rem')}>
      {data.map((ev) => {
        return (
            <div style={{borderBottom: '1px solid lightgray', paddingBottom: '1rem', paddingTop: '1rem', borderRadius: '4px'}}>
            <div style={{display: 'flex', marginBottom: '1rem'}}>
              <img src={ev.logo} alt="" style={{width: '3rem', marginRight: '1rem', height: '3rem'}} />
              <Typography>
                <t style={{fontWeight: 'bold'}}>{ev.name}</t> {ev.status && 
                <svg style={{width: '1rem', color: 'dodgerblue'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                </svg>              
                }<br />
                <t style={{fontSize: '0.8rem', color: 'gray'}}>{ev.status ? 'Identitas terverifikasi' : 'Identitas belum terverifikasi'}</t>
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