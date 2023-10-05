import React from 'react';

const DataRow = ({ row }) => {
  const circleStyle = {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    display: 'inline-block',
    marginRight: '5px',
  };

  const getCircleColor = (estado) => {
    if (estado === 'Contactado') return ' rgba(40, 199, 111, 1)';
    if (estado === 'Lista Gris') return 'gray';
    if (estado === 'No Contesta') return 'rgba(255, 158, 25, 1)';
    if (estado === 'Venta Concretada') return 'rgba(11, 98, 234, 1)';

    return 'transparent';
  };

  return (
    <div>
      <div style={{ ...circleStyle, backgroundColor: getCircleColor(row.estado) }}></div>
      <span style={{ fontFamily: 'Public Sans', fontSize: '12px', fontWeight: '600', lineHeight: '22px' }}>
      
        {row.estado}
        </span>

    </div>
  );
};

export default DataRow;
