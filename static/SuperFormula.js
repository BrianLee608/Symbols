function superformula (n, a, phi){
    part1 = Math.pow(Math.abs(Math.cos(n[0] * phi / 4.0) / a[0]), n[2]);
    part2 = Math.pow(Math.abs(Math.sin(n[0] * phi / 4.0) / a[1]), n[3]);
    r = Math.pow(part1 + part2, -1/n[1])
    if(Math.abs(r)==0){
        return [0,0]
    }
    else{
        return [r * Math.cos(phi), r * Math.sin(phi)]
    }
}