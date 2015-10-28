function superformula3D (n, a, phi, theta){
    part1p = Math.pow(Math.abs(Math.cos(n[0] * phi / 4.0) / a[0]), n[2]);
    part2p = Math.pow(Math.abs(Math.sin(n[0] * phi / 4.0) / a[1]), n[3]);

    part1t = Math.pow(Math.abs(Math.cos(n[0] * theta / 4.0) / a[0]), n[2]);
    part2t = Math.pow(Math.abs(Math.sin(n[0] * theta / 4.0) / a[1]), n[3]);

    rp = Math.pow(part1p + part2p, -1/n[1])
    rt = Math.pow(part1t + part2t, -1/n[1])

    if(Math.abs(rt)==0){
        return [0,0,0]
    }
    else if(Math.abs(rp)==0){
        return [0,0,rt * Math.sin(theta)]
    }
    else{
        return [rp * Math.cos(phi) * rt * Math.cos(theta),
                rp * Math.sin(phi) * rt * Math.sin(theta),
                rt * Math.sin(theta)]
    }
}