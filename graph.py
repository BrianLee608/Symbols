import matplotlib.pyplot as plt
import numpy as np

#2D
# a[0] = a, a[1] = b
# n[0] = m, n[1...3] = n1...n3
def superformula(n, a, phi):

   t1 = pow(abs(np.cos(n[0] * phi / 4.0) / a[0]), n[2])
   t2 = pow(abs(np.sin(n[0] * phi / 4.0) / a[1]), n[3])

   t3 = -1 / float(n[1])
   r = pow(t1 + t2, t3)
   if any(abs(r) == 0):
      return (0,0)
   else:
      return (r * np.cos(phi), r * np.sin(phi))

a = [3, 2]
n = [43, 41, 12, 17]
phi = np.arange(0,6.28,step=.01)

data = superformula(n, a, phi)

plt.plot(data[0],data[1], 'ro')

plt.savefig('out.png', bbox_inches='tight', pad_inches=0)

print(data)
plt.show()

# Implementation directly from Wikipedia
from mpl_toolkits.mplot3d import axes3d as mpl3d
#
#
#
# __author__ = 'brianlee'
#
#
# # plt.plot([1, 2, 3, 4], [1, 4, 9, 16], 'ro')
# # plt.axis([0, 6, 0, 20])
# # plt.show()
#
#
#
# def sf2d(n,a):
#     u = (np.arange(0,6.28,step=.01))
#     print(u)
#     # print(1 * u/4)
#     raux = abs(np.cos(n[0] * u/4)) ^ 5
#     # print (raux)
#
# print("this is a test")
# n = [1]
# a = [2]
# sf2d(n, a)
# print(np.cos(4))

# function sf2d(n,a)
#     u=[0:.001:2*pi];
#     raux=abs(1/a(1).*abs(cos(n(1)*u/4))).^n(3)+abs(1/a(2).*abs(sin(n(1)*u/4))).^n(4);
#     r=abs(raux).^(-1/n(2));
#     x=r.*cos(u);
#     y=r.*sin(u);
#     plot(x,y);
#   end

# 3D
# a[0] = a, a[1] = b
# n[0] = m, n[1...3] = n1...n3
# def superformula(n, a, phi, theta):
#
#    t1a = pow(abs(np.cos(n[0] * phi / 4.0) / a[0]), n[2])
#    t1b = pow(abs(np.sin(n[0] * phi / 4.0) / a[1]), n[3])
#
#    t2a = pow(abs(np.cos(n[0] * theta / 4.0) / a[0]), n[2])
#    t2b = pow(abs(np.sin(n[0] * theta / 4.0) / a[1]), n[3])
#
#    t3 = -1 / float(n[1])
#
#    r1 = pow(t1a + t1b, t3)
#    r2 = pow(t2a + t2b, t3)
#
#    if any(abs(r2) == 0):
#       return (0,0,0)
#    elif any(abs(r1 == 0)):
#       return (0,0,r2 * np.sin(theta))
#    else:
#       x = [0] * (len(r1)*len(r2))
#       y = [0] * (len(r1)*len(r2))
#       z = [0] * (len(r1)*len(r2))
#
#       counter = 0;
#       for i in range(0,len(r1)):
#          for j in range(0,len(r2)):
#             # x, y, z
#             x[counter] = r1[i] * np.cos(phi[i]) * r2[j] * np.cos(theta[j])
#             y[counter] = r1[i] * np.sin(phi[i]) * r2[j] * np.sin(theta[j])
#             z[counter] = r2[j] * np.sin(theta[j])
#             counter = counter + 1
#
#       return (x,y,z)
#
# phi = np.arange(0,6.28,step=.1)
# theta = np.arange(-3.14/2,3.14/2,step=.1)
# a = [23, 32]
# n = [33, 141, 42, 1]
#
# data = superformula(n, a, phi, theta)

