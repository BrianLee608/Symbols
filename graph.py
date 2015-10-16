import matplotlib.pyplot as plt
import numpy as np
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



def superformula(a, b, m, n1, n2, n3, phi):
   ''' Computes the position of the point on a
   superformula curve.
   Superformula has first been proposed by Johan Gielis
   and is a generalization of superellipse.
   see: http://en.wikipedia.org/wiki/Superformula
   '''

   t1 = np.cos(m * phi / 4.0) / a
   t1 = abs(t1)
   t1 = pow(t1, n2)

   t2 = np.sin(m * phi / 4.0) / b
   t2 = abs(t2)
   t2 = pow(t2, n3)

   t3 = -1 / float(n1)
   r = pow(t1 + t2, t3)
   if any(abs(r) == 0):
      return (0,0)
   else:
      return (r * np.cos(phi), r * np.sin(phi))

u = (np.arange(0,6.28,step=.01))
x = np.linspace(0,6.28,1000)

data = superformula(23,32,33,141,42,1,u)
plt.plot(data[0],data[1], 'ro')

plt.savefig('out.png', bbox_inches='tight', pad_inches=0)

print(data)
plt.show()

