import React, { useState } from 'react'
import styles from './Contact.module.css'
import Button from '../Button/Button'
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import {HiMail} from 'react-icons/hi';
export default function ContactForm() {
      const [name, setName] = useState("Shiva");
    const [email, setEmail] = useState("s@gmail.com");
    const [text, setText] = useState("Hello World");

  const onsubmit = (e)=>{
    e.preventDefault();

    setName(e.target[0].value);
    setEmail(e.target[1].value);
    setText(e.target[2].value);
  }

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
        <Button text="Via Chat Support" icon={<MdMessage />} />
      <Button text="Via Call" icon={< FaPhoneAlt />} />
        </div>
        <Button isOutline={true} text='Via Email Form' icon={<HiMail fontSize='24px' />} />

        <form onSubmit={onsubmit} >
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name='name' />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="text" name='email' />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name='text' row='8' />
          </div>
          <div style={{display : 'flex', justifyContent : 'end'}}>
            <Button text='Submit Button' />
          </div>
          <div>
            {name + " " + email + " " + text}
          </div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDw8NDxAPEA8QDw8QEA8PDxAPDxUQFRUWGBYVFRUYHikgGB0mGxUVIjEhJSkrLi4uFx8zODMuOCgtMCsBCgoKDg0OGxAQFy0fHSUtLS0tKy0tListKy0tMistLS0tKy0tLSstKy0tListLS0rMC0tLS0tLS0rLSstLSstLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAQIDBQYHBAj/xABKEAABAwIEAwQFBQwHCQAAAAABAAIDBBEFEiExBkFRBxNhgSIycZGhFFKUscEjQlRicpKjw9HS0+EVJCVkgrLwFzNDRFNzdOLj/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAHxEBAQEBAAMAAwEBAAAAAAAAAAECEQMSITEyQSIE/9oADAMBAAIRAxEAPwDtyhSiCEUqEBERAREQQilQgIiKgiIgIipc62p0A1JPRBKLUMU7Q6KIvjjLp5GaeiMrL/lHf2gLUJe1CvDifk0AZYkAtkvblc5tf5Kdjcxa68pXNsI7V4X2FRCWO5ujddvts7b3rdsGx6lrATTyteWgFzL2e0HmR08U6lzYyaIiqCIiAiIiCIiAiIgIiICKUQFClEEoiKAiIgKFKhAREQEREEIiICIioLmnanxO5jRRQPy5r964XzOG2QW2HXqukSyBjXPOzQSfJcXhpH19fK70bNfysBvr7dSSsb16x18OPbTEYVhT3sEmQk3t5jmshPwvWj7oAJMuzBvY7D7F1LC8KihaA1ov1I1WS+TDewXCe1eq+k+Pn7FsHlaTI2N8ZtdzHjIL88ttCvNgePy0szHhxY8O0dYG3X2jqOa75iNFG9pa9oIK5NxlwfkzTwWLdS6N32JPJy8pfH7TuXYeHcYZW07Z2Wv6r2jYPsDp4G4I8CsouVditf8A7+ncTctY5odvZpNx4j0r+9dVXpl68Wpy8ERFWRERAREQEREBSiKAiIgIiIJRSoQEREBERBCIiAiIgKFJUICIio8mLutC8/kf5mrl3ADs0tRNcZblxI0aCTe1/BdI4oqDFRzSBuYtDCG9TnauedncPeQVsUjGhwqnsLHD0RoHZbdAXLj5p/l6f+b9m7UuNUrtGzxE3t64+F91ku/B5rneKYFXyuOZ9MGZwAxtMDaPTUEtJc619NBrutnwDDH08BZIRo0kBoLQPLl7Fymrz49FxP6v4pi9PFfvZo2eDnAO9261PEscpp2ujikDiQdC1zSdOVwL+St1XDlQ8OqWPa2V7g4EQmQi+9yATcC1lRDhNaGufUyh7WOJaTGWOI/JI09q565Z2u2Jy8jG9mBLMQiHUzNd7Mj/ALV2pcS7PJh/Tj4wPQzyWPIOEcpIHtzN9y7avbn8PmeX9gIgRacxERAREQFKIoCIiAiIgIiIKioUqEBERAREQQiIgIiIChSoQERFRi+KGOdR1GXcROdbwA1+F1zvgbE+8rMSldZrXyQS2Gwc8OzHzyhdXc0EEHUEEEeC1OPgujou+npWyMD2RtfEZHPjDWZtW5ruv6XMnbRY8k7ix28GpNzr21GKhuRjBme82aPtPQLzTY7BEXsnLmOaNS5jmtP5JIs7yK8TsLc8OkgldFKG+jJZsjb31aWuGxt4bqZ6cSsLJZp5Nrg0rJADbW2Vuh9q8kur9fR9MPJw3xG2R0jmh3dC1y4WsSTt1AFlPFGLMLe7abucRoFhIMKfJUMjZVTMp2elO0tiYXD5unqj4+xYnEOJMMkme6F0pYwsAc2O923sXNzEDcj1iBruszGr8n4b3c412/KxnBWIzRvdUwRh0sPy6aR5LRcOeACbkXAaGi25vpqu/wADiWMLhZxa0uHRxGvxXNuz3s/NM14qpzJcwPEMdgx0bXd5G5z9bgu3a02uyxLhv01fQfH1eiIiMiIiAiIglFClQEREBERAREQSiIgIiICIoQEREBERBCIioIixuJ4/RUulTVU8LvmPlYJD7GXzHyCDJKxWVjIg0vOr3iNjfvnPNzlA9gJPQAnktLr+1fDI793385H/AE4sjT5yFv1LXuGuK5cXxqndI1scMEdS+GEHNlJZkLy7751nWvpYE253LI2ijxAQyFkmkbj6J5C/JZOooYpNc2/RWMSwkEFhHLQ9QtYqY5oLhr3tG2/JeDvr8sfUz9+5r1Y7VwUbe7isXk+ltp4fyXFeIZmCcxwsZFG0NORjQLuN9SeehFhy1tuVumKOtck3K0fH6CSKV2cWe9ge4HcE3IB8bAe9dPF+eufnvzjsvZTxGaikETiXT0OoG7n0brXA6lthb8lo5ldNaQQCCCCLgjUEL5h4Dxh9DVQ1Ldmuc17eToz6w9xv5L6NwGrjlivEQ6MOPdkfMIDg23LLmLLfiL05v8eLef6ySKFK05iIiAiIgKVClAREUBERAREQSiIgIihBKhEQEREBQiKguadrnFFZQyUkdLMYQ+OSSTK2NxNnNDb5gbDdbRx5xMMMpDMAHTSHu4GnbOQTmd4Aa+Og5r52xPEJqh75Z5HyyO3fIczvZ4DXYaBGsxsD+PsVO9bNe3IRN+AbZatW1BNySS57rucSS4knUkncqjPt7FaqD6h8Qq0usdy5rb+y6o7vFqXkH97H+dG63xAWnsYL5jvy8FsHBDrYnQ/+RGPebfaivpJ8YeLHyPNa1i9G/OI8hc518uXY/s81sj5QANi43ytvYkgJFGWtc46vd6R6XtoB4Lj5PHNr4/LcNUpuFo4yJpQHyDVrd2NPh1PiuSceMvVyvtb7o0WP4rR/Nd8qqiFoLpHhlhchx9LyHPyXEuOAJKqQ5SzNMRld6wBJAvbnslkzJI3nWt9tasyOx9H5xHmszhfFNZhzxLTP9E37yGQF0L7ts0uaCNR6OoIOm9rhYVhIk05nUeWq9lZBmYBzOZv2j6ipPz1qzs42Rvaziu96W/Q07g33Z7/FbBw/2vn0WV8DRdwBnp7taG83OjcSdN9HddOvHmv1sd1WTcEE2uCLru4cj62UrW+B+LafE4A6Mhs0bWiaC+rTtmbf1mHkfI6rZFHMREQEREEooUoCIigIiIJRQiAiIgIiICIoVBHEAXOgG5RaZi3F8EtXR0FLLFMJu9kmkie2RoaxrsrLjmXC56ZR1RZOtW444ZxXFKl02albA30II3VDrtZfcgMIzOOpt4DkFrJ7LMU+dR/SHfuLrxYqS1VtyH/ZXifWj+kH91Uz9lmKG1vkmn94/wDVdfLVGVByQdmGJ/3b6QP2L34B2fYjBV007xT5Ip4nutO0nK1wJsOei6WWlUlpQZ9srN7tva19L2Vx07CLZhtbda5lKjKVOHGakbG/18jrai9jquacccJ1lTVumpmxuYS11zLG3UDXQnqtxylMhUuZWpbHMY+A8QDy4xR25fd4d7flK5NwXiN9ImEB4cPu8PiPndD8F0nIUyJ6xfauPVfZ1ifevcyBhYdR/WIAevzlQ7s8xXbuG+P9Yp9vz12Pu0Ea1GXJKLCcVwiRleIS3uTdxbJHI3J9814Y4nKRvppvpYFd5wHF4q6miq4T6Erb2NszXDRzHeIIIWt1kQ7uS+o7t9wemUrnXZFxe2ikdS1Dy2mqMha6znBlRo0GwGzhYE8srfFGdR3lERRgREQEREEooUoCIiAiIgIihAREQERY/HsVZRUs9XILthjLsoIBc7ZrQTzLiB5oMRx7xazC6fMMrqmW4gjO1xu9w+a249pIHiOK9nMl8XpT8501+l+6fyWO4lx6bEKiSqnIzOsGsbfIxg9VjfAfEknmvT2bu/teh8ZJB+hkVbk478WKgxr1FqpLETry5FGReosUZEXrylijIvV3agxodeXImReru1HdodebImRenu07tDry5EyL1d2ndodeXIpyL05EyIdY3FBaCY9IZT7mlfOEL/RFugC+kOIBajqz0pqg/o3L5tby/wBeCL137sj4qmroJaeodnlpRFaU+u+J2YDP1ILCM3O4vrcnf18scPYxNQ1MdXAbPjOrbkNew+sx34pH2HcBfRfC3FNLiUXeQPs8AGWB9hLGT1HMX2cNCozYzqKERlKIiAiIgIiICIiAiIgIihBTNK1jXPe4NY1pc5zjZoaBcknkLL5/7QuOZcRe6CM5KNjyY2DR0ltA+T6w3lfmdVk+2vieZ9UcLjc5tPC2N0rGHKZZnNDxmPzGhzfO/QW5qyEW1DfYBp/NWNSIe5Z7s4P9r0H/AHnfGN4WvSxN+9Nj0H7FmOzyQtxfDw4W/rLRfkbtcPtRX0vlTKrllNkZWcqjKr+VMqCxkTIr2VMqCxkTIr+VMqCxkUZFfLUyoLGRMqv5VGVBZyoWq9lUFqDA8XnLh1e7pRVR/ROXzcF9Icd6YViJ/uNV8Y3L5tvzKLFwFbHwJjjaHEKeqkLu6aXslyXJ7t7S0mw9YA5XW/F6rUxUXNmAutz2b71cY5/Vo8ifiivryKRr2te0hzXNDmuBuC0i4IPSyrXz9wB2kz0EjKascZqI5GXJJfTjYOYDuwXF29BptY9/a4EAgggi4I1BHIhRlUihSiJRQpQEREBFCIJUIiAihEHzNx/Wd7ite/n8pfH5R2jHwYFrj5NQBzv7lvva/wAKTUlXNiDG5qOofnLx/wAKZ3rNf0Bdcg7a23tfnTZAXAgg6W0N+f8AMKtyva21lnOCbf0nQHpVw/FwH2rAtWW4Pnb/AEjQ2P8AztKPMytCK+nbKbKbKbI5osllVZLIKbJZVWSyCmyWVVksgososq7JZBRZLKuyWQW7KCFcsoIQYniFtN8kqBWHLSuhkbO70riNzSHWygm+vJfLuIUcYmkbFK6WBr3CJ7o+6c5vJzm8j/rwX1Pj0LH00zJGtfG5uVzXAFpBI0IXBuMeExTkzUpJhOpjJJcz2E7t9uvtWL5JNcrtjxa1n2jTmBoFhyVedWpHdVbv46fFbZXzJrYr6a7OK0T4TQPDsxbA2JxO+aImM/Fi+XM/v2X0J2FvccI1vYVc+Tplswm3+Iu+KjNdERQl0RUipul0FSKm6lAUoApREKFKIIRSiDCPhBJvrcm9146nBKaUESQQPB3zxRu+sLKyN1I8SostjScT7NMOmuWRup3W3gcWt/MN2jyC1+h7JDT1dPUQ1d44ainmySxkyHu5GuIL2utrY/erqpCi2oRWRClApWUEREBERAREQFCXRAREQFClQgxXEbHuppWxtL3nJZoLQT6QvqSBsueYzw1iM8RbEIIy4bzSuJH+FjSPiunV7rMJPUfWsJU4ixvo3u7p0WLjOtdrvjyazjkclouySrcfu9TAwXue6bJK4+y4aB8Vs1B2U4ewDvDPMeeaUsHuZb61uDKq+yvscTyXXjlWHpuDsOjsWUdMCNnGFj3fnOBK2nA6dscZawBrA70WtAa0czYDbdeMArL0cWVgHM6nzSovoiLIIiICKUQVoiKIKFKIIREQeeeC5zDzCsZURWBlQMRFRddSHlNK3wHdn/M0qy7D5TtVzj/BTH9WiKC2cNqOVbN5xUx/Vqg4dV8q1/nTwH7ERQUHDq7lXe+li/aqTh+IfhzPOjj/AHkRBSaDEfw2Lzo2/vqPkOJfhsH0MfxERVenyLEvwyn+h/8A0VQosS/C6f6Gf4qhEOqhR4j+F0/0M/xVWKOv51UH0M/xUREXG0lZzqYvKlI/WK8ymn5ztPshA+1EQeevwsygd5PKWj71gYwX67X+K80GB07Nmknq4lxRFYva9TaVg2ACq7sKEVR6IKUGzjtyC9alFmiEREBERAREQf/Z' alt='contact img' />
      </div>
    </section>
  )
}
