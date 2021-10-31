type TColor = | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'black' | 'white';
type TObjectColor = {
  color: string;
  value: string;
}

const colors:TObjectColor[] = [
  {
    color:'primary',
    value: '26, 92, 255'
  },
  {
    color:'secondary',
    value: 'red'
  },
  {
    color:'success',
    value: '23, 201, 100'
  },
  {
    color:'warning',
    value: '255, 186, 0'
  },
  {
    color:'danger',
    value: '242, 19, 93'
  },
  {
    color:'black',
    value: '36, 33, 69'
  },
  {
    color:'white',
    value: 'white'
  }

];

export function getColor(color: TColor):TObjectColor {
  if (color) {
    return colors.find(el =>{
      if (el.color === color) {
        return el;
      }
    });
  }
  return {
    color: null,
    value: null,
  };
}